import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { notifySuccess, notifyError } from "../../state/actions/appActions"
import { CopyToClipboard as ReactCopyToClipboard } from "react-copy-to-clipboard"
import GradientButton from "../GradientButton"

const CopyToClipboard = ({ notifySuccess, notifyError, app }) => {
  const { clipboard } = app

  const onCopy = (text, result) => {
    // show success notification if copy was successful and user selected at least one keyword
    if (result === true && clipboard.length > 0) {
      notifySuccess()
    } else {
      notifyError()
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

CopyToClipboard.propTypes = {
  notifySuccess: PropTypes.func.isRequired,
  notifyError: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(
  mapStateToProps,
  { notifySuccess, notifyError }
)(CopyToClipboard)
