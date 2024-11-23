import DocPreview from "@/components/doc-preview"
import MultiFileDropzoneUsage from "@/components/multi-file-dropzone-usage"
import { useEffect, useState } from "react"


// <div className="flex flex-col gap-8 justify-center">

const DocumentSection = () => {
  const [docLoaded, setDocLoaded] = useState<boolean>(false)

  const handleDocLoaded = () => {
    setDocLoaded(true)
    localStorage.setItem('docLoaded', "true")
  }

  useEffect(() => {
    const storedDocLoaded = localStorage.getItem('docLoaded') === "true"
    setDocLoaded(storedDocLoaded)
  }, [])

  return (
    <div className="flex flex-col gap-8 overflow-y-auto overflow-x-hidden">
      {docLoaded ?
        <DocPreview /> :
        <div className="h-full flex flex-col justify-center overflow-x-hidden overflow-y-auto">
          <MultiFileDropzoneUsage onLoadComplete={handleDocLoaded} />
        </div>
      }
    </div>
  )
}

export default DocumentSection

