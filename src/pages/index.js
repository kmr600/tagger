import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { connect } from 'react-redux'
import { getMessage } from '../state/actions/appActions'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ app, getMessage }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <button onClick={() => getMessage()}>Get Message</button>
    <p>{app.message}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

IndexPage.propTypes = {
  app: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps, { getMessage })(IndexPage)