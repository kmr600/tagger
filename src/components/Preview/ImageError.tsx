import React from "react"
import styled from "styled-components"
import { FaRegDizzy } from "react-icons/fa"

const Container = styled.div`
  max-width: 380px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.mediumGrey};
`

const Heading = styled.h2`
  margin-top: 30px;
  font-size: 3rem;
  font-weight: 700;
`

const ErrorIcon = styled(FaRegDizzy)`
  font-size: 10rem;
`

const Message = styled.p`
  margin-top: 30px;
  max-width: 90%;
  font-family: ${props => props.theme.defaultFont};
  font-size: 1rem;
  color: ${props => props.theme.mediumGrey};
  text-align: center;
`

type Props = {
  errorMessage: string
}

const ImageError: React.FC<Props> = ({ errorMessage }) => (
  <Container>
    <ErrorIcon />
    <Heading>Oops!</Heading>
    <Message>{errorMessage}</Message>
  </Container>
)

export default ImageError
