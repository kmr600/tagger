import React, { useEffect, useRef } from "react"
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

interface AppState {
  app: {
    loading: boolean
    generatedKeywords: string[]
  }
}

const IndexPage = () => {
  const dispatch = useDispatch()

  const { loading, generatedKeywords } = useSelector(({ app }: AppState) => app)

  // const

  useEffect(() => {
    dispatch(startLoading(document.querySelector("body") as HTMLElement))
    dispatch(reset())

    // set delay to loading screen to avoid page flicker caused by the preview box rendering
    const loadingDelay = setTimeout(
      () =>
        dispatch(stopLoading(document.querySelector("body") as HTMLElement)),
      750
    )
    return () => {
      clearTimeout(loadingDelay)
      clearAllBodyScrollLocks()
    }
  }, [dispatch])

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
