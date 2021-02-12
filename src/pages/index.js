import React, { useLayoutEffect, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startLoading, stopLoading, reset } from "../state/actions/appActions"
import { clearAllBodyScrollLocks } from "body-scroll-lock"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import LoadingScreen from "../components/LoadingScreen"
import { ToastContainer } from "react-toastify"
import Preview from "../components/Preview"
import Upload from "../components/Upload"
import Keywords from "../components/Keywords"

import "react-toastify/dist/ReactToastify.min.css"

const IndexPage = () => {
  const dispatch = useDispatch()

  const { loading, generatedKeywords } = useSelector(({ app }) => app)

  useLayoutEffect(() => {
    dispatch(startLoading())
    dispatch(reset())
  }, [])

  useEffect(() => {
    // set delay to loading screen to avoid page flicker caused by the preview box rendering
    const loadingDelay = setTimeout(() => dispatch(stopLoading(), 750))

    return () => {
      clearTimeout(loadingDelay)
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      <div id="index-page">
        {loading && <LoadingScreen />}

        <ToastContainer
          className="notification-container"
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          closeButton={false}
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        <section id="generator">
          <Preview />
          <Upload />
        </section>

        {generatedKeywords.length > 0 && (
          <section id="keywords">
            <Keywords />
          </section>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
