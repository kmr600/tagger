import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { notifySuccess, notifyError } from "../../state/actions/appActions"
import { CopyToClipboard as ReactCopyToClipboard } from "react-copy-to-clipboard"
import GradientButton from "../GradientButton"

const CopyToClipboard = () => {
  const dispatch = useDispatch()

  const { clipboard } = useSelector(({ app }) => app)

  const onCopy = (text, result) => {
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
