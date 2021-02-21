import React, { useLayoutEffect, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearAllBodyScrollLocks } from "body-scroll-lock"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import { startLoading, stopLoading, reset } from "../state/actions/appActions"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import LoadingScreen from "../components/LoadingScreen"
import Preview from "../components/Preview"
import Upload from "../components/Upload"
import Keywords from "../components/Keywords"
import "react-toastify/dist/ReactToastify.min.css"

const Page = styled.div``

const Generator = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

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

      <Page>
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

        <Generator>
          <Preview />
          <Upload />
        </Generator>

        {generatedKeywords.length > 0 && <Keywords />}
      </Page>
    </Layout>
  )
}

export default IndexPage
