import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import '../assets'
import '../css'

const Layout = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={`layout ${className}`}>
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
        <div className="app-wrapper">{children}</div>
      </div>
    )}
  />
)

export default styled(Layout)`
  &.layout {
    height: 100%;

    .app-wrapper {
      height: calc(100% - 4.8rem);
    }
  }
`

Layout.defaultProps = {
  children: null,
  className: '',
  data: {},
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  data: PropTypes.shape({}),
}
