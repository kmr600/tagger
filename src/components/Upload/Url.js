import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaLink } from "react-icons/fa"
import { Box, Info, Heading, FileTypes, BoxText } from "../form-elements"

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #fff;
  color: #000;
  padding: 25px 40px 25px 70px;
  font-size: 0.9rem;
  -moz-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: ${props => props.theme.mediumGrey};
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }

  &:focus + label {
    color: #000;
  }

  @media (max-width: 1024px) {
    padding-left: 60px;
    padding-right: 30px;
  }
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  color: ${props => props.theme.mediumGrey};
  font-size: 1.1rem;
  transition: color 0.3s ease-in-out;

  @media (max-width: 1024px) {
    left: 30px;
  }
`

const Url = ({ url, handleURL }) => {
  return (
    <Box>
      <Info>
        <Heading>Paste URL</Heading>
        <FileTypes>(JPEG, PNG, TIFF, BMP, WEBP)</FileTypes>
      </Info>

      <BoxText>
        <Input
          placeholder="Paste URL"
          value={url.present ? url.name : ""}
          type="text"
          name="url"
          id="url-input"
          onChange={e => handleURL(e)}
        />
        <Label htmlFor="url">{<FaLink />}</Label>
      </BoxText>
    </Box>
  )
}

Url.propsTypes = {
  url: PropTypes.object.isRequired,
  handleURL: PropTypes.func.isRequired,
}

export default Url
