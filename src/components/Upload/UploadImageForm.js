import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled, { keyframes } from "styled-components"
import axios from "axios"
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

const UploadImageForm = () => {
  const dispatch = useDispatch()

  const { generatedKeywords, maxConcepts } = useSelector(({ app }) => app)

  const [file, setFile] = useState({
    present: false,
    name: "",
    src: "",
    type: "",
    blob: "",
  })
  const [url, setUrl] = useState({
    present: false,
    name: "",
    src: "",
  })

  useEffect(() => {
    return () => {
      // clear previous uploaded image from browser
      URL.revokeObjectURL(file.src)
    }
  }, [])

  const handleUpload = e => {
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

  const handleURL = e => {
    // clear file field because we only want to submit one image
    setFile({ ...file, present: false, src: "", name: "", type: "", blob: "" })

    setUrl({
      ...file,
      present: true,
      name: e.target.value,
      src: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch(startLoading())
    dispatch(reset())

    if (file.present) {
      try {
        await fileIsImage(file.type)
        await fileIsNotGif(file.type)
        const base64 = await getBase64(file.blob)
        const cloudinaryUrl = await uploadToCloudinary(base64)
        const data = await getClarifaiData(cloudinaryUrl)
        dispatch(showResults(file, data))
      } catch (errorMessage) {
        dispatch(setErrorMessage(errorMessage))
      }
      // set delay to loading screen to avoid page flicker caused by the preview box rendering
      setTimeout(() => dispatch(stopLoading(), 250))
    } else if (url.present) {
      try {
        await urlIsImage(url.src)
        await urlIsNotGif(url.src)
        const data = await getClarifaiData(url.src)
        dispatch(showResults(url, data))
      } catch (errorMessage) {
        dispatch(setErrorMessage(errorMessage))
      }
      // set delay to loading screen to avoid page flicker caused by the preview box rendering
      setTimeout(() => dispatch(stopLoading(), 250))
    } else {
      // in the case that both fields are empty
      dispatch(setErrorMessage("Upload an image or paste a URL to try again."))
      // set delay to loading screen to avoid page flicker caused by the preview box rendering
      setTimeout(() => dispatch(stopLoading(), 250))
    }
  }

  const fileIsImage = type => {
    return new Promise((resolve, reject) => {
      if (type.split("/")[0] === "image") {
        resolve()
      } else {
        reject(`It seems that you didn't use a valid image.`)
      }
    })
  }

  const fileIsNotGif = type => {
    return new Promise((resolve, reject) => {
      if (type.split("/")[1] === "gif") {
        reject(
          `GIFs are not supported. Use a different image or URL and try again.`
        )
      } else {
        resolve()
      }
    })
  }

  const urlIsImage = src => {
    return new Promise((resolve, reject) => {
      let tester = new Image()
      tester.src = src

      tester.onload = () => resolve()

      tester.onerror = () =>
        reject(`It seems that you didn't use a valid image.`)
    })
  }

  const urlIsNotGif = src => {
    return new Promise((resolve, reject) => {
      let extension = src.substring(src.length - 3, src.length).toLowerCase()

      if (extension === "gif") {
        reject(
          `GIFs are not supported. Use a different image or URL and try again.`
        )
      } else {
        resolve()
      }
    })
  }

  const getBase64 = fileSrc => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(fileSrc)
      reader.onload = () => resolve(reader.result)
      reader.onerror = () =>
        reject("Something went wrong with uploading your image.")
    })
  }

  const uploadToCloudinary = src => {
    // upload uploaded file's blob to Cloudinary so it becomes an accesible url
    return new Promise((resolve, reject) => {
      let formData = new FormData()
      formData.append("file", src)
      formData.append(
        "upload_preset",
        process.env.GATSBY_CLOUDINARY_UPLOAD_PRESET
      )

      axios({
        url: process.env.GATSBY_CLOUDINARY_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      })
        .then(response => resolve(response.data.secure_url))
        .catch(() => reject("Something went wrong with uploading your image."))
    })
  }

  const getClarifaiData = src => {
    return new Promise((resolve, reject) => {
      clarifaiApp.models
        .predict(Clarifai.GENERAL_MODEL, `${src}`, {
          maxConcepts: maxConcepts,
        })
        .then(response => {
          // retrieve concepts/keywords
          let concepts = response["outputs"][0]["data"]["concepts"]
          let data = []

          // loop through concepts to only get name of concepts and save them
          for (let i = 0; i < concepts.length; i++) {
            let concept = response["outputs"][0]["data"]["concepts"][i]["name"]

            data = [...data, concept]
          }

          resolve(data)
        })
        .catch(() => reject(`Something with wrong with uploading your image.`))
    })
  }

  return (
    <UploadOptionsForm onSubmit={handleSubmit}>
      <Upload file={file} handleUpload={handleUpload} />

      <Or>or</Or>

      <Url url={url} handleURL={handleURL} />

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
