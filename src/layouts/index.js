import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../assets'

const Layout = ({ children, data }) => (
  <div style={{height: "100%"}}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header titles={[
      {name: "appartements", url: ""},
      {name: "emplacement", url: "maps"},
      {name: "contact", url: "contact"}
    ]}/>
    <div style={{height: "calc(100% - 4.65rem)"}}>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
