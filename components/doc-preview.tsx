"use client"

import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

// const url = "https://gavrt.lewiscenter.org/documents/Uranus_Intro.pdf"

function noDoc() {
  return (
    <div
      className="border shadow-md text-5xl grid items-center text-gray-200 font-bold text-center"
    >No Files Loaded!</div>
  )
}

function loadingDoc() {
  return (
    <Loader2 className="animate-spin" />
  )
}

const DocPreview = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div
      className="h-full w-full rounded-xl overflow-auto overflow-x-hidden relative"
    >
      <Document noData={noDoc} loading={loadingDoc} file="/1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page, index) => {
            return (
              <Page
                className="mb-5"
                key={index}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={loadingDoc}
              />
            )
          })}

      </Document>
    </div>
  )
}

export default DocPreview
