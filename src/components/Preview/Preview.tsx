import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
  FaRegHeart,
  FaRegComment,
  FaRegEnvelope,
  FaRegBookmark,
} from "react-icons/fa"
import {
  PreviewBox,
  PreviewHeader,
  ProfilePicture,
  ProfileInfo,
  Name,
  Location,
  MoreContainer,
  More,
  PreviewImageContainer,
  PreviewFooter,
  Buttons,
  Left,
  Right,
  Likes,
  Hashtags,
  HashtagsName,
  Hashtag,
} from "./PreviewStyles"
import { PrevImage1, PrevHashtags1 } from "../PreviewImages/PrevImage1"
import { PrevImage2, PrevHashtags2 } from "../PreviewImages/PrevImage2"
import { PrevImage3, PrevHashtags3 } from "../PreviewImages/PrevImage3"
import { PrevImage4, PrevHashtags4 } from "../PreviewImages/PrevImage4"
import { PrevImage5, PrevHashtags5 } from "../PreviewImages/PrevImage5"
import { PrevImage6, PrevHashtags6 } from "../PreviewImages/PrevImage6"

interface AppState {
  app: {
    imageSrc: string
    imageName: string
    likes: number
    generatedKeywords: string[]
    selectedKeywords: string[]
  }
}

const Preview = () => {
  const {
    imageSrc,
    imageName,
    likes,
    generatedKeywords,
    selectedKeywords,
  } = useSelector(({ app }: AppState) => app)

  const [previewNumber, setPreviewNumber] = useState<number | null>(null)

  useEffect(() => {
    setPreviewNumber(Math.floor(Math.random() * 6) + 1)
  }, [])

  const renderPreviewImage = () => {
    switch (previewNumber) {
      case 1:
        return <PrevImage1 />
      case 2:
        return <PrevImage2 />
      case 3:
        return <PrevImage3 />
      case 4:
        return <PrevImage4 />
      case 5:
        return <PrevImage5 />
      case 6:
        return <PrevImage6 />
      default:
        return
    }
  }

  const renderPreviewHashtags = () => {
    switch (previewNumber) {
      case 1:
        return <PrevHashtags1 />
      case 2:
        return <PrevHashtags2 />
      case 3:
        return <PrevHashtags3 />
      case 4:
        return <PrevHashtags4 />
      case 5:
        return <PrevHashtags5 />
      case 6:
        return <PrevHashtags6 />
      default:
        return
    }
  }

  return (
    <PreviewBox>
      <PreviewHeader>
        <ProfilePicture />

        <ProfileInfo>
          <Name />

          <Location />
        </ProfileInfo>

        <MoreContainer>
          <More />
        </MoreContainer>
      </PreviewHeader>

      <PreviewImageContainer>
        {generatedKeywords.length > 0 ? (
          <img src={imageSrc} alt={imageName} />
        ) : (
          renderPreviewImage()
        )}
      </PreviewImageContainer>

      <PreviewFooter>
        <Buttons>
          <Left>
            <FaRegHeart className="button" />
            <FaRegComment className="button flip" />
            <FaRegEnvelope className="button" />
          </Left>
          <Right>
            <FaRegBookmark className="button" />
          </Right>
        </Buttons>

        <Likes>
          {selectedKeywords.length > 0
            ? `${Math.floor(Math.random() * 50) +
                100 * selectedKeywords.length +
                likes} likes`
            : `${likes} likes`}
        </Likes>

        <Hashtags>
          <HashtagsName />

          {generatedKeywords.length > 0
            ? selectedKeywords.map((keyword, index) => (
                <Hashtag key={index}>{`#${keyword}`}</Hashtag>
              ))
            : renderPreviewHashtags()}
        </Hashtags>
      </PreviewFooter>
    </PreviewBox>
  )
}

export default Preview
