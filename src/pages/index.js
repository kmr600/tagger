import React, { useLayoutEffect, useEffect } from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"
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

const IndexPage = ({ startLoading, stopLoading, reset, app }) => {
  const { loading, generatedKeywords } = app

  useLayoutEffect(() => {
    startLoading()
    reset()
  }, [])

  useEffect(() => {
    // set delay to loading screen to avoid page flicker caused by the preview box rendering
    const loadingDelay = setTimeout(() => stopLoading(), 750)

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

IndexPage.propTypes = {
  startLoading: PropTypes.func.isRequired,
  stopLoading: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(
  mapStateToProps,
  { startLoading, stopLoading, reset }
)(IndexPage)
