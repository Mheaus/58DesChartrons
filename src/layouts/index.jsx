import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header } from '../components'
import '../assets'
import '../css'

const Layout = ({ children, data }) => (
  <div style={{ height: '100%' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header
      titles={[
        { name: 'appartements', url: '' },
        { name: 'emplacement', url: 'maps' },
      ]}
    />
    <div style={{ height: 'calc(100% - 4.65rem)' }}>{children()}</div>
  </div>
)

export default Layout

Layout.defaultProps = {
  data: {},
  children: () => null,
}

Layout.propTypes = {
  data: PropTypes.shape({}),
  children: PropTypes.func,
}

// eslint-disable-next-line
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
