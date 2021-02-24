import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Preview from "./Preview"
import ImageError from "./ImageError"

const Container = styled.div`
  flex: 0 0 auto;
  margin-right: 110px;

  @media (max-width: 1024px) {
    width: 100%;
    order: 2;
    flex: auto;
    margin-right: 0;
    margin-top: 50px;
  }
`

export default () => {
  const { error, errorMessage } = useSelector(({ app }) => app)

  return (
    <Container>
      {error ? <ImageError errorMessage={errorMessage} /> : <Preview />}
    </Container>
  )
}
