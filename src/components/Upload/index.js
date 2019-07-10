import React from "react"
import UploadImageForm from "./UploadImageForm"

export default () => (
  <div className="upload">
    <div className="intro">
      <h1>
        Welcome to
        <br />
        Tagger
      </h1>
      <p>Your go to hashtag generator</p>
    </div>

    <div className="upload-options">
      <UploadImageForm />
    </div>
  </div>
)
