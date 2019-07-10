import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  FaRegHeart,
  FaRegComment,
  FaRegEnvelope,
  FaRegBookmark,
} from "react-icons/fa"

const Preview = ({ app }) => {
  const { imageSrc, imageName, likes, selectedKeywords } = app

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
        <img src={imageSrc} alt={imageName} />
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

          {selectedKeywords.map((keyword, index) => {
            return <li key={index} className="hashtag">{`#${keyword}`}</li>
          })}
        </div>
      </div>
    </div>
  )
}

Preview.propTypes = {
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(
  mapStateToProps,
  {}
)(Preview)
