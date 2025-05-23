'use client';

import { useAuth } from '@/app/(protected)/playground/playground';
import {
  MultiFileDropzone,
  type FileState,
} from '@/components/ui/multi-file-dropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MultiFileDropzoneUsage = () => {
  const router = useRouter()
  const username = useAuth()
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <MultiFileDropzone
      value={fileStates}
      onChange={(files) => {
        setFileStates(files);
      }}
      onFilesAdded={async (addedFiles) => {
        setFileStates([...fileStates, ...addedFiles]);
        console.log(addedFiles)
        try {
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.myPublicFiles.upload({
                  file: addedFileState.file,
                  input: { type: `${username}` },
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar at 100%
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, 'COMPLETE');
                    }
                  },
                });
                console.log(res)
                localStorage.setItem(`docUrl`, res.url)
              } catch (err) {
                console.error(err)
                updateFileProgress(addedFileState.key, 'ERROR');
              }
            }),
          );
          // Redirigir a la URL
          await new Promise((complete) => setTimeout(complete, 2000))
          const firstUrl = localStorage.getItem("docUrl")
          const newUrl = "/playground/" + firstUrl
          router.push(newUrl)
        } catch (error) {
          console.error(error)
        }
      }}
    />
  );
}

export default MultiFileDropzoneUsage

