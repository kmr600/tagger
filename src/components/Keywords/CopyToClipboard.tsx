import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CopyToClipboard as ReactCopyToClipboard } from "react-copy-to-clipboard"
import styled from "styled-components"
import { notifySuccess, notifyError } from "../../state/actions/appActions"
import GradientBtn from "../GradientButton"

const GradientButton = styled(GradientBtn)`
  margin: 50px auto 0;
`

interface AppState {
  app: {
    clipboard: string
  }
}

const CopyToClipboard = () => {
  const dispatch = useDispatch()

  const { clipboard } = useSelector(({ app }: AppState) => app)

  const onCopy = (text: string, result: boolean): void => {
    // show success notification if copy was successful and user selected at least one keyword
    if (result === true && clipboard.length > 0) {
      dispatch(notifySuccess())
    } else {
      dispatch(notifyError())
    }
  }

  return (
    <ReactCopyToClipboard
      text={clipboard}
      onCopy={(text, result) => onCopy(text, result)}
    >
      <GradientButton>Copy Selected Hashtags</GradientButton>
    </ReactCopyToClipboard>
  )
}

export default CopyToClipboard
