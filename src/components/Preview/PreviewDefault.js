import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  FaRegHeart,
  FaRegComment,
  FaRegEnvelope,
  FaRegBookmark,
} from "react-icons/fa"
import { Prev1Image, Prev1Hashtags } from "../PreviewImages/Prev1Image"
import { Prev2Image, Prev2Hashtags } from "../PreviewImages/Prev2Image"
import { Prev3Image, Prev3Hashtags } from "../PreviewImages/Prev3Image"
import { Prev4Image, Prev4Hashtags } from "../PreviewImages/Prev4Image"
import { Prev5Image, Prev5Hashtags } from "../PreviewImages/Prev5Image"
import { Prev6Image, Prev6Hashtags } from "../PreviewImages/Prev6Image"

const PreviewDefault = ({ app }) => {
  const { likes, selectedKeywords } = app

  const previewImageNumber = Math.floor(Math.random() * 6) + 1

  return (
    <div className="preview-box">
      <div className="preview-header">
        <div className="profile-picture" />

        <div className="profile-info">
          <div className="name" />

          <div className="location" />
        </div>

        <div className="more-container">
          <div className="more" />
        </div>
      </div>

      <div className="preview-image-container">
        {previewImageNumber === 1 && <Prev1Image />}
        {previewImageNumber === 2 && <Prev2Image />}
        {previewImageNumber === 3 && <Prev3Image />}
        {previewImageNumber === 4 && <Prev4Image />}
        {previewImageNumber === 5 && <Prev5Image />}
        {previewImageNumber === 6 && <Prev6Image />}
      </div>

      <div className="preview-footer">
        <div className="buttons">
          <div className="left">
            <FaRegHeart className="button" />
            <FaRegComment className="button flip" />
            <FaRegEnvelope className="button rotate" />
          </div>
          <div className="right">
            <FaRegBookmark className="button" />
          </div>
        </div>

        <div className="likes">
          {selectedKeywords.length > 0
            ? `${Math.floor(Math.random() * 50) +
                100 * selectedKeywords.length +
                likes} likes`
            : `${likes} likes`}
        </div>

        <div className="hashtags">
          <div className="name" />

          {previewImageNumber === 1 && <Prev1Hashtags />}
          {previewImageNumber === 2 && <Prev2Hashtags />}
          {previewImageNumber === 3 && <Prev3Hashtags />}
          {previewImageNumber === 4 && <Prev4Hashtags />}
          {previewImageNumber === 5 && <Prev5Hashtags />}
          {previewImageNumber === 6 && <Prev6Hashtags />}
        </div>
      </div>
    </div>
  )
}

PreviewDefault.propTypes = {
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(
  mapStateToProps,
  {}
)(PreviewDefault)
