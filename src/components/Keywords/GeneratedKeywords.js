import React from "react"
import { useSelector } from "react-redux"
import Keyword from "./Keyword"

const GeneratedKeywords = () => {
  const { generatedKeywords } = useSelector(({ app }) => app)

  return (
    <div className="generated-keywords">
      {generatedKeywords.map((keyword, index) => (
        <Keyword key={index}>{keyword}</Keyword>
      ))}
    </div>
  )
}

export default GeneratedKeywords
