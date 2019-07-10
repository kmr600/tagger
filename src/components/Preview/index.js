import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import PreviewDefault from "./PreviewDefault"
import Preview from "./Preview"
import ImageError from "./ImageError"

const PreviewIndex = ({ app }) => {
  const { error, errorMessage, generatedKeywords } = app

  return (
    <div className="preview">
      {error ? (
        <ImageError errorMessage={errorMessage} />
      ) : generatedKeywords.length > 0 ? (
        <Preview />
      ) : (
        <PreviewDefault />
      )}
    </div>
  )
}

PreviewIndex.propTypes = {
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(
  mapStateToProps,
  {}
)(PreviewIndex)
