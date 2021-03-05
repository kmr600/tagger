import styled from "styled-components"

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.defaultFont};
  font-size: 0.9rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 349px) {
    flex-direction: column;
  }
`

export const Heading = styled.h3`
  font-family: ${props => props.theme.josefin};
  font-weight: 700;
  font-size: 0.9rem;
  color: ${props => props.theme.grey};
  margin-bottom: 20px;

  @media (max-width: 349px) {
    margin-bottom: 10px;
  }
`

export const FileTypes = styled.p`
  margin-left: 10px;
  font-family: ${props => props.theme.defaultFont};
  font-size: 0.5rem;
  color: ${props => props.theme.grey};

  @media (max-width: 349px) {
    margin-bottom: 10px;
    margin-left: 0;
  }
`

export const BoxText = styled.div`
  position: relative;
  width: 100%;
`
