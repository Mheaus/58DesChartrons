import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  background: #FFF;
  border-radius: 4px;
  padding: 4rem 2rem;
  ul {
    list-style: none;
  }
`

const ContentCard = (props) => (
  <Layout className={props.className}>
    {props.children}
  </Layout>
)

export default ContentCard;
