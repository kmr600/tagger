import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  startLoading,
  stopLoading,
  setErrorMessage,
  showResults,
  reset,
} from "../../state/actions/appActions"
import axios from "axios"
import Clarifai from "clarifai"
import { FaFileUpload, FaLink, FaCaretDown } from "react-icons/fa"
import GradientButton from "../GradientButton"

const clarifaiApp = new Clarifai.App({
  apiKey: `${process.env.GATSBY_CLARIFAI_API_KEY}`,
})

const UploadImageForm = ({
  startLoading,
  stopLoading,
  setErrorMessage,
  showResults,
  reset,
  app,
}) => {
  const { generatedKeywords, maxConcepts } = app

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

    startLoading()
    reset()

    if (file.present) {
      try {
        await fileIsImage(file.type)
        await fileIsNotGif(file.type)
        const base64 = await getBase64(file.blob)
        const cloudinaryUrl = await uploadToCloudinary(base64)
        const data = await getClarifaiData(cloudinaryUrl)
        showResults(file, data)
      } catch (errorMessage) {
        setErrorMessage(errorMessage)
      }
      // set delay to loading screen to avoid page flicker caused by the preview box rendering
      setTimeout(() => stopLoading(), 250)
    } else if (url.present) {
      try {
        await urlIsImage(url.src)
        await urlIsNotGif(url.src)
        const data = await getClarifaiData(url.src)
        showResults(url, data)
      } catch (errorMessage) {
        setErrorMessage(errorMessage)
      }
      // set delay to loading screen to avoid page flicker caused by the preview box rendering
      setTimeout(() => stopLoading(), 250)
    } else {
      // in the case that both fields are empty
      setErrorMessage("Upload an image or paste a URL to try again.")
      // set delay to loading screen to avoid page flicker caused by the preview box rendering
      setTimeout(() => stopLoading(), 250)
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
    <form className="upload-image-form" onSubmit={handleSubmit}>
      <div className="upload-box">
        <div className="info">
          <h3>Upload Image</h3>
          <p className="file-types">(JPEG, PNG, TIFF, BMP, WEBP)</p>
        </div>

        <div className="box-text">
          <input
            type="file"
            name="file"
            id="file-input"
            onChange={e => handleUpload(e)}
          />

          <label
            className={file.present ? "active" : ""}
            id="file-input"
            htmlFor="file-input"
          >
            {file.present ? file.name : `No file selected`}
          </label>
          <span className="icon">
            <FaFileUpload />
          </span>
        </div>
      </div>

      <span className="or">or</span>

      <div className="url-box">
        <div className="info">
          <h3>Paste URL</h3>
          <p className="file-types">(JPEG, PNG, TIFF, BMP, WEBP)</p>
        </div>

        <div className="box-text">
          <input
            placeholder="Paste URL"
            value={url.present ? url.name : ""}
            type="text"
            name="url"
            id="url-input"
            onChange={e => handleURL(e)}
          />
          <label htmlFor="url">{<FaLink />}</label>
        </div>
      </div>

      <GradientButton type="submit">Generate Hashtags</GradientButton>

      {generatedKeywords.length > 0 && (
        <div id="scroll-down">
          <p>Scroll down to see Generated Hashtags</p>
          <span className="icon">
            <FaCaretDown />
          </span>
        </div>
      )}
    </form>
  )
}

UploadImageForm.propTypes = {
  startLoading: PropTypes.func.isRequired,
  stopLoading: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  showResults: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(
  mapStateToProps,
  { startLoading, stopLoading, setErrorMessage, showResults, reset }
)(UploadImageForm)
