import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import {
  addSelectedKeyword,
  removeSelectedKeyword,
} from "../../state/actions/appActions"

const KeywordButton = styled.button`
  width: 21%;
  margin: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 10px;
  background: ${props => props.theme.blue};
  color: #fff;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  -webkit-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &.selected {
    opacity: 0.6;
    -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    transform: translateY(3px);
  }

  @media (max-width: 1024px) {
    width: 46%;
    font-size: 0.8rem;
  }
`

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
    <KeywordButton
      className={selected && "selected"}
      onClick={e => handleClick(e)}
    >
      {children}
    </KeywordButton>
  )
}

Keyword.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Keyword
