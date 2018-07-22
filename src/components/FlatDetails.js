import React from 'react'
import styled from 'styled-components'

const FlatDetailsLayout = styled.div`
  background: #FFF;
  border-radius: 4px;
  padding: 4rem 2rem;
  ul {
    list-style: none;
  }
`

const FlatDetails = (props) => (
  <FlatDetailsLayout className={props.className}>
    {props.children}
  </FlatDetailsLayout>
)

export default FlatDetails;
