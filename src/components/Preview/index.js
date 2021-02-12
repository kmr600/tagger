import React from "react"
import { useSelector } from "react-redux"
import PreviewDefault from "./PreviewDefault"
import Preview from "./Preview"
import ImageError from "./ImageError"

const PreviewIndex = () => {
  const { error, errorMessage, generatedKeywords } = useSelector(
    ({ app }) => app
  )

  return (
    <div className="preview">
      {error ? (
        <ImageError errorMessage={errorMessage} />
      ) : generatedKeywords.length > 0 ? (
        <Preview />
      ) : (
        <PreviewDefault />
      )}
    </div>
  )
}

export default PreviewIndex
