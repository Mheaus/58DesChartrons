import React from 'react'
import { push } from 'gatsby-link'
import styled from 'styled-components'

const Layout = styled.header`
  background: #FFF;
  border-bottom: solid 1px #EBEBEB;
  display: flex;
  padding: 1.75rem 1rem;
  .header__group-left {
    display: flex;
  }
  .header__title {
    cursor: pointer;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: .75px;
    margin: 0 1rem;
    text-transform: uppercase;
    transition: all .25s;
    &:hover {
      opacity: .85;
    }
    &.header__title--active {}
    &.header__title--unactive {
      opacity: .5;
    }
  }
`

const Header = ({ titles }) => (
  <Layout className="header">
    <div className="header__group-left">
      {titles.map((title, index) =>
        <h1 key={index} className={`header__title${window.location.pathname.substr(1) === title.url ? " header__title--active" : " header__title--unactive"}`} onClick={() => window.___history.push(`/${title.url}`)}>
          {title.name}
        </h1>
      )}
    </div>
  </Layout>
)

export default Header
