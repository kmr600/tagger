import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Keyword from "./Keyword"

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

interface AppState {
  app: {
    generatedKeywords: string[]
  }
}

const GeneratedKeywords = () => {
  const { generatedKeywords } = useSelector(({ app }: AppState) => app)

  return (
    <Container>
      {generatedKeywords.map((keyword, index) => (
        <Keyword key={index}>{keyword}</Keyword>
      ))}
    </Container>
  )
}

export default GeneratedKeywords
