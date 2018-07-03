import React from 'react'
import styled from 'styled-components'

import RoomList from '../../components/RoomList.js'

const Layout = styled.div`
  .flat__info {
    float: left;
    max-width: calc(100% - 40rem);
    padding: 2rem 1rem;
    ul {
      list-style: none;
    }
  }
`

const FlatPage = () => (
  <Layout className="flat">
    <div className="flat__info">

    </div>
  </Layout>
)

export default FlatPage;
