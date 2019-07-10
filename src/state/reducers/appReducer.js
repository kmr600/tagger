import {
  START_LOADING,
  STOP_LOADING,
  ADD_SELECTED_KEYWORD,
  REMOVE_SELECTED_KEYWORD,
  NOTIFY_SUCCESS,
  NOTIFY_ERROR,
  SET_ERROR_MESSAGE,
  SHOW_RESULTS,
  RESET,
} from "../actions/types"

const initialState = {
  likes: Math.floor(Math.random() * 150) + 400,
  imageSrc: null,
  imageName: null,
  error: false,
  errorMessage: "",
  maxConcepts: 23,
  generatedKeywords: [],
  selectedKeywords: [],
  clipboard: "",
  loading: true,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      }
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      }
    case ADD_SELECTED_KEYWORD:
      return {
        ...state,
        selectedKeywords: [...state.selectedKeywords, action.payload],
        clipboard: state.clipboard.concat(" ", `#${action.payload}`).trim(),
      }
    case REMOVE_SELECTED_KEYWORD:
      return {
        ...state,
        selectedKeywords: state.selectedKeywords.filter(
          keyword => keyword !== action.payload
        ),
        clipboard: state.clipboard.replace(`#${action.payload}`, "").trim(),
      }
    case NOTIFY_SUCCESS:
      return {
        ...state,
      }
    case NOTIFY_ERROR:
      return {
        ...state,
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      }
    case SHOW_RESULTS:
      return {
        ...state,
        imageSrc: action.payload.image.src,
        imageName: action.payload.image.name,
        generatedKeywords: action.payload.generatedKeywords.concat("tagger"),
      }
    case RESET:
      return {
        ...state,
        error: false,
        errorMessage: "Please try a different image or URL.",
        imageSrc: null,
        imageName: null,
        generatedKeywords: [],
        selectedKeywords: [],
        clipboard: "",
      }
    default:
      return state
  }
}
