import MultiFileDropzoneUsage from "@/components/multi-file-dropzone-usage"

const DocumentSection = () => {

  return (
    <div className="flex flex-col gap-8 overflow-y-auto overflow-x-hidden">
      <div className="h-full flex flex-col justify-center overflow-x-hidden overflow-y-auto">
        <MultiFileDropzoneUsage />
      </div>
    </div>
  )
}

export default DocumentSection

