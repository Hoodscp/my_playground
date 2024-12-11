'use client'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'core-js/full/promise/with-resolvers.js'

// pdf.js 워커 설정
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const PDFViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [currentPDF, setCurrentPDF] = useState<string>('/pdfs/DLL.pdf') // 기본 PDF 경로

  // PDF 목록 (실제 PDF 파일들로 교체하세요)
  const pdfList: string[] = [
    '/pdfs/DLL.pdf',
    '/pdfs/UPX.pdf',
    '/pdfs/MinRev.pdf',
    '/pdfs/Pwndbg.pdf',
    '/pdfs/test.pdf',
    '/pdfs/Isaac.pdf',
    '/pdfs/dnSPY.pdf',
  ]

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="flex flex-col items-center p-4">
      {/* PDF 제목 */}
      <h2 className="text-2xl font-bold mb-4">{currentPDF.split('/').pop()}</h2>

      {/* PDF 뷰어 */}
      <div className="border-2 border-gray-300 mb-4">
        <Document file={currentPDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={0.5} />
        </Document>
      </div>

      {/* 페이지 네비게이션 */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setPageNumber((page) => Math.max(page - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
        >
          이전
        </button>
        <span>
          {pageNumber} / {numPages}
        </span>
        <button
          onClick={() =>
            setPageNumber((page) => Math.min(page + 1, numPages || 1))
          }
          disabled={pageNumber >= (numPages || 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
        >
          다음
        </button>
      </div>

      {/* PDF 선택 버튼들 */}
      <div className="flex gap-2">
        {pdfList.map((pdf, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPDF(pdf)
              setPageNumber(1)
            }}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {pdf.split('/').pop()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PDFViewer
