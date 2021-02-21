import React from "react"
import styled, { keyframes } from "styled-components"

const bounce = keyframes`
  50% {
    transform: translateY(-5px);
  }
`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9001;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`

const Content = styled.p`
  font-family: ${props => props.theme.lobster};
  font-size: 5rem;
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`

const Loading = styled.span`
  height: 100%;
  background: ${props => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 5px;
`

const Dot = styled.span`
  background: ${props => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 1s ${bounce} ease infinite;

  &.dot-one {
    animation-delay: -0.32s;
  }

  &.dot-two {
    animation-delay: -0.16s;
  }
`

export default () => (
  <Container id="loading-screen">
    <Content>
      <Loading className="loading">Loading</Loading>
      <Dot className="dot-one">.</Dot>
      <Dot className="dot-two">.</Dot>
      <Dot className="dot-three">.</Dot>
    </Content>
  </Container>
)
