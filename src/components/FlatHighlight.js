import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 4rem 1rem;
  position: relative;
  width: 100%;
  z-index: -1;
  .highlighted-flat__title {
    font-size: 3.5rem;
    font-weight: normal;
    letter-spacing: .75px;
    line-height: 3.25rem;
    margin-bottom: 2rem;
    width: 80%;
  }
  .highlighted-flat__subtitle {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: .75px;
  }
  &::before {
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1));
    bottom: 0;
    content: "";
    height: 60%;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: -1;
  }
  &::after {}

`

const FlatHighlight = ({ flat }) => (
  <Layout className="highlighted-flat" image={flat.cover}>
    <h1 className="highlighted-flat__title">{flat.name}</h1>
    <p className="highlighted-flat__subtitle">{flat.description}</p>
  </Layout>
)

export default FlatHighlight;
