import React from "react"
import PropTypes from "prop-types"
import { FaRegDizzy } from "react-icons/fa"

const ImageError = ({ errorMessage }) => (
  <div className="image-error">
    <FaRegDizzy className="error-icon" />
    <h2>Oops!</h2>
    <p>{errorMessage}</p>
  </div>
)

ImageError.propsTypes = {
  errorMessage: PropTypes.string.isRequired,
}

export default ImageError
