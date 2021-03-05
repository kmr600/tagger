import React from "react"
import styled from "styled-components"
import { FaFileUpload } from "react-icons/fa"
import { Box, Info, Heading, FileTypes, BoxText } from "../form-elements"

const Input = styled.input`
  display: none;
`

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #fff;
  color: ${props => props.theme.mediumGrey};
  padding: 25px 40px 25px 70px;
  font-size: 0.9rem;
  -moz-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &.active {
    color: #000;
  }

  @media (max-width: 1024px) {
    padding-left: 60px;
    padding-right: 30px;
  }
`

const Icon = styled.span`
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

type Props = {
  file: {
    present: boolean
    name: string
    src: string
    type: string
    blob: Blob | null
  }
  handleUpload: (e: any) => void
}

const Upload: React.FC<Props> = ({ file, handleUpload }) => {
  return (
    <Box>
      <Info>
        <Heading>Upload Image</Heading>
        <FileTypes>(JPEG, PNG, TIFF, BMP, WEBP)</FileTypes>
      </Info>

      <BoxText>
        <Input
          type="file"
          name="file"
          id="file-input"
          onChange={e => handleUpload(e)}
          accept="image/jpeg, image/png, image/tiff, image/bmp, image/webp"
        />

        <Label
          className={file.present ? "active" : ""}
          id="file-input"
          htmlFor="file-input"
        >
          {file.present ? file.name : `No file selected`}
        </Label>
        <Icon>
          <FaFileUpload />
        </Icon>
      </BoxText>
    </Box>
  )
}

export default Upload
