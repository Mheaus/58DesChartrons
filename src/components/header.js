import React from 'react'
import { push } from 'gatsby-link'
import styled from 'styled-components'

const Layout = styled.header`
  background: #FFF;
  display: flex;
  padding: 2rem 1rem;
  .header__group-left {
    display: flex;
  }
  .header__title {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: .75px;
    margin: 0 1rem;
    text-transform: uppercase;
  }
`

const Header = ({ titles }) => (
  <Layout className="header">
    <div className="header__group-left">
      {titles.map(title =>
        <h1 className="header__title" onClick={() => window.___history.push(`/${title.name}`)}>
          {title.name}
        </h1>
      )}
    </div>
  </Layout>
)

export default Header
