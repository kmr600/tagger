import styled from "styled-components"

export const PreviewBox = styled.div`
  max-width: 380px;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
`

export const PreviewHeader = styled.div`
  padding: 16px 24px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-gap: 14px;
  @supports not (display: grid) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ProfilePicture = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.theme.lightGrey};
`

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @supports not (display: grid) {
    width: 80% !important;
  }
`

export const Name = styled.div`
  width: 50%;
  height: 12px;
  border-radius: 5px;
  background: ${props => props.theme.lightGrey};
  margin-bottom: 3px;
  @supports not (display: grid) {
    width: 45% !important;
  }
`

export const Location = styled.div`
  width: 75%;
  height: 12px;
  border-radius: 5px;
  background: ${props => props.theme.lightGrey};
  margin-bottom: 3px;
  @supports not (display: grid) {
    width: 68% !important;
  }
`

export const MoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @supports not (display: grid) {
    position: relative;
    left: -6px;
  }
`

export const More = styled.div`
  width: 3px;
  height: 3px;
  background: #000;
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    background: #000;
    border-radius: 50%;
  }

  &::before {
    left: -6px;
  }

  &::after {
    left: 6px;
  }
`

export const PreviewImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;

    &[alt] {
      max-width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }
`

export const PreviewFooter = styled.div`
  padding: 16px 24px;
  width: 100%;
  display: grid;
  grid-row-gap: 12px;
  @supports not (display: grid) {
    display: flex;
    flex-direction: column;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  color: #353535;

  .button {
    margin-right: 13px;

    &:last-of-type {
      margin-right: 0;
    }

    &.flip {
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
    }
  }
  @supports not (display: grid) {
    margin-bottom: 12px;
  }
`
export const Left = styled.div``

export const Right = styled.div``

export const Likes = styled.div`
  font-size: 0.8rem;
  @supports not (display: grid) {
    margin-bottom: 12px;
  }
`
export const Hashtags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const HashtagsName = styled.div`
  width: 31.3%;
  height: 12px;
  border-radius: 5px;
  background: ${props => props.theme.lightGrey};
  margin-bottom: 3px;
`

export const Hashtag = styled.li`
  list-style: none;
  margin-left: 4px;
  margin-bottom: 4px;
  font-size: 0.8rem;
  color: ${props => props.theme.blue};
`
