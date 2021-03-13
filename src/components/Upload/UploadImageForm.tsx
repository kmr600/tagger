import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled, { keyframes } from "styled-components"
import Clarifai from "clarifai"
import { FaCaretDown } from "react-icons/fa"
import {
  startLoading,
  stopLoading,
  setErrorMessage,
  showResults,
  reset,
} from "../../state/actions/appActions"
import Upload from "./Upload"
import Url from "./Url"
import GradientBtn from "../GradientButton"
import {
  fileIsImage,
  fileIsNotGif,
  urlIsImage,
  urlIsNotGif,
  getBase64,
  uploadToCloudinary,
  getClarifaiData,
} from "../../utils"

const move = keyframes`
  0% {
    top: 0;
  }

  50% {
    top: 10px;
  }

  100% {
    top: 0;
  }
`

const UploadOptionsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Or = styled.span`
  margin: 20px 0;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  color: ${props => props.theme.grey};
`

const GradientButton = styled(GradientBtn)`
  margin-top: 50px;
`

const ScrollDown = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ScrollDownText = styled.p`
  color: #000;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 767px) {
    text-align: center;
    line-height: 1.4;
  }
`

const ScrollDownIcon = styled.span`
  animation: ${move} 2s infinite;
  position: relative;
`

const clarifaiApp = new Clarifai.App({
  apiKey: `${process.env.GATSBY_CLARIFAI_API_KEY}`,
})

interface AppState {
  app: {
    generatedKeywords: string[]
    maxConcepts: number
  }
}

interface File {
  present: boolean
  name: string
  src: string
  type: string
  blob: Blob | null
}

interface Url {
  present: boolean
  name: string
  src: string
}

type PreviouslySubmitted = File | Url | null

const UploadImageForm = () => {
  const dispatch = useDispatch()

  const { generatedKeywords, maxConcepts } = useSelector(
    ({ app }: AppState) => app
  )

  const [file, setFile] = useState<File>({
    present: false,
    name: "",
    src: "",
    type: "",
    blob: null,
  })
  const [url, setUrl] = useState<Url>({
    present: false,
    name: "",
    src: "",
  })

  const [previouslySubmitted, setPreviouslySubmitted] = useState<
    PreviouslySubmitted
  >(null)

  useEffect(() => {
    return () => {
      // clear previous uploaded image from browser
      if (file && file.src) URL.revokeObjectURL(file.src)
    }
  }, [file])

  const handleUpload = (e: any): void => {
    // clear url field because we only want to submit one image
    setUrl({ ...url, present: false, name: "", src: "" })

    // clear previous uploaded image from browser
    URL.revokeObjectURL(file.src)

    // the if statement is needed to avoid error if user cancels image selection
    if (e.target.files[0]) {
      setFile({
        ...file,
        present: true,
        name: e.target.files[0].name,
        src: URL.createObjectURL(e.target.files[0]),
        type: e.target.files[0].type,
        blob: e.target.files[0],
      })
    }
  }

  const handleUrl = (e: any): void => {
    // clear file field because we only want to submit one image
    setFile({
      ...file,
      present: false,
      src: "",
      name: "",
      type: "",
      blob: null,
    })

    setUrl({
      ...file,
      present: true,
      name: e.target.value,
      src: e.target.value,
    })
  }

  const wasPreviouslySubmitted = () => {
    if (file.present && previouslySubmitted) {
      if (file.src === previouslySubmitted.src) return true
    } else if (url.present && previouslySubmitted) {
      if (url.src === previouslySubmitted.src) return true
    }

    return false
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (wasPreviouslySubmitted()) return

    dispatch(startLoading(document.querySelector("body") as HTMLElement))
    dispatch(reset())

    if (file.present) {
      try {
        await fileIsImage(file.type)
        await fileIsNotGif(file.type)
        const base64: any = await getBase64(file.blob)
        const cloudinaryUrl: any = await uploadToCloudinary(base64)
        const data: any = await getClarifaiData({
          src: cloudinaryUrl,
          maxConcepts,
          Clarifai,
          clarifaiApp,
        })
        dispatch(showResults(file, data))
        setPreviouslySubmitted(file)
      } catch (errorMessage) {
        dispatch(setErrorMessage(errorMessage))
      }
    } else if (url.present) {
      try {
        await urlIsImage(url.src)
        await urlIsNotGif(url.src)
        const data: any = await getClarifaiData({
          src: url.src,
          maxConcepts,
          Clarifai,
          clarifaiApp,
        })
        dispatch(showResults(url, data))
        setPreviouslySubmitted(url)
      } catch (errorMessage) {
        dispatch(setErrorMessage(errorMessage))
        setPreviouslySubmitted(null)
      }
    } else {
      // in the case that both fields are empty
      dispatch(setErrorMessage("Upload an image or paste a URL to try again."))
      setPreviouslySubmitted(null)
    }

    // set delay to loading screen to avoid page flicker caused by the preview box rendering
    setTimeout(
      () =>
        dispatch(stopLoading(document.querySelector("body") as HTMLElement)),
      250
    )
  }

  return (
    <UploadOptionsForm onSubmit={handleSubmit}>
      <Upload file={file} handleUpload={handleUpload} />

      <Or>or</Or>

      <Url url={url} handleUrl={handleUrl} />

      <GradientButton type="submit">Generate Hashtags</GradientButton>

      {generatedKeywords.length > 0 && (
        <ScrollDown>
          <ScrollDownText>Scroll down to see Generated Hashtags</ScrollDownText>
          <ScrollDownIcon>
            <FaCaretDown />
          </ScrollDownIcon>
        </ScrollDown>
      )}
    </UploadOptionsForm>
  )
}

export default UploadImageForm
