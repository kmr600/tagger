import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Keyword from "./Keyword"

const GeneratedKeywords = ({ app }) => {
  const { generatedKeywords } = app

  return (
    <div className="generated-keywords">
      {generatedKeywords.map((keyword, index) => (
        <Keyword key={index}>{keyword}</Keyword>
      ))}
    </div>
  )
}

GeneratedKeywords.propTypes = {
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(
  mapStateToProps,
  {}
)(GeneratedKeywords)
