import styled from 'styled-components'

import Flat from './Flat'

export default styled(Flat)`
  height: 100%;
  overflow: scroll;
  padding: 2rem 0;
  position: relative;
  .col {
    &.col--right {
      float: right;
      margin: 2rem;
      width: 32rem;
      .contact {
        background: #fff;
        border-radius: 2px;
        margin-top: 1rem;
        padding: 1rem 0 0 1rem;
      }
    }
    &.col--left {
      float: left;
      margin: 1rem;
      max-width: calc(100% - 40rem);
    }
  }
  .flat__background {
    background-color: #c6c6c6;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px) brightness(75%);
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`