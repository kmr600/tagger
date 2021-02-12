import React from "react"
import { useSelector } from "react-redux"
import {
  FaRegHeart,
  FaRegComment,
  FaRegEnvelope,
  FaRegBookmark,
} from "react-icons/fa"
import { PrevImage1, PrevHashtags1 } from "../PreviewImages/PrevImage1"
import { PrevImage2, PrevHashtags2 } from "../PreviewImages/PrevImage2"
import { PrevImage3, PrevHashtags3 } from "../PreviewImages/PrevImage3"
import { PrevImage4, PrevHashtags4 } from "../PreviewImages/PrevImage4"
import { PrevImage5, PrevHashtags5 } from "../PreviewImages/PrevImage5"
import { PrevImage6, PrevHashtags6 } from "../PreviewImages/PrevImage6"

const PreviewDefault = () => {
  const { likes, selectedKeywords } = useSelector(({ app }) => app)

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
        {previewImageNumber === 1 && <PrevImage1 />}
        {previewImageNumber === 2 && <PrevImage2 />}
        {previewImageNumber === 3 && <PrevImage3 />}
        {previewImageNumber === 4 && <PrevImage4 />}
        {previewImageNumber === 5 && <PrevImage5 />}
        {previewImageNumber === 6 && <PrevImage6 />}
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

          {previewImageNumber === 1 && <PrevHashtags1 />}
          {previewImageNumber === 2 && <PrevHashtags2 />}
          {previewImageNumber === 3 && <PrevHashtags3 />}
          {previewImageNumber === 4 && <PrevHashtags4 />}
          {previewImageNumber === 5 && <PrevHashtags5 />}
          {previewImageNumber === 6 && <PrevHashtags6 />}
        </div>
      </div>
    </div>
  )
}

export default PreviewDefault
