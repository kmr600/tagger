import React from "react"
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
} from "./types"

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { toast } from "react-toastify"
import { FaCheck, FaBan } from "react-icons/fa"

export const startLoading = (target: HTMLElement) => (dispatch: any) => {
  dispatch({
    type: START_LOADING,
  })

  disableBodyScroll(target)
}

export const stopLoading = (target: HTMLElement) => (dispatch: any) => {
  dispatch({
    type: STOP_LOADING,
  })

  enableBodyScroll(target)
}

export const addSelectedKeyword = (keyword: string) => (dispatch: any) => {
  dispatch({
    type: ADD_SELECTED_KEYWORD,
    payload: keyword,
  })
}

export const removeSelectedKeyword = (keyword: string) => (dispatch: any) => {
  dispatch({
    type: REMOVE_SELECTED_KEYWORD,
    payload: keyword,
  })
}

export const notifySuccess = () => (dispatch: any) => {
  dispatch({
    type: NOTIFY_SUCCESS,
  })

  // closeToast is needed, even if not used, to avoid errors since we are rendering a component within the toast
  toast.success(() => <FaCheck />, {
    className: "notification success-notification",
  })
}

export const notifyError = () => (dispatch: any) => {
  dispatch({
    type: NOTIFY_ERROR,
  })

  // closeToast is needed, even if not used, to avoid errors since we are rendering a component within the toast
  toast.error(() => <FaBan />, {
    className: "notification error-notification",
  })
}

export const setErrorMessage = (errorMessage: string) => (dispatch: any) => {
  dispatch({
    type: SET_ERROR_MESSAGE,
    payload: errorMessage,
  })
}

export const showResults = (image: {}, generatedKeywords: string[]) => (
  dispatch: any
) => {
  dispatch({
    type: SHOW_RESULTS,
    payload: {
      image,
      generatedKeywords,
    },
  })
}

export const reset = () => (dispatch: any) => {
  dispatch({
    type: RESET,
  })
}
