import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import {
  addSelectedKeyword,
  removeSelectedKeyword,
} from "../../state/actions/appActions"

const Keyword = ({ children }) => {
  const dispatch = useDispatch()

  const [keyword, setKeyword] = useState("")
  const [selected, setSelected] = useState(false)

  const handleClick = e => {
    let keyword = e.target.innerText

    // remove spaces from keywordName since hashtags don't have spaces
    keyword = keyword.replace(/\s+/g, "")

    setKeyword(keyword)
    setSelected(!selected)
  }

  useEffect(() => {
    // add to selected keywords list when selecting
    if (selected) {
      dispatch(addSelectedKeyword(keyword))
    }

    // remove from selected keywords list when deselecting
    if (!selected && keyword !== "") {
      dispatch(removeSelectedKeyword(keyword))
    }
  }, [selected])

  return (
    <button
      className={`keyword-button ${selected ? "selected" : ""}`}
      onClick={e => handleClick(e)}
    >
      {children}
    </button>
  )
}

Keyword.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Keyword
