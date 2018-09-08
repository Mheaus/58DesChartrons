import styled from 'styled-components'

import Flat from './Flat'

export default styled(Flat)`
  height: 100%;
  overflow: scroll;
  position: relative;

  &.flat--covered {
    .button-open {
      opacity: 0;
    }
    .flat__main-content {
      filter: blur(5px);
    }
    .flat__background {
      filter: blur(5px);
    }
  }

  .button-open {
    background: white;
    border-radius: 2px;
    color: rgb(56, 56, 60, 0.75);
    font-weight: 600;
    opacity: 1;
    padding: 0.75rem 1.5rem;
    position: absolute;
    right: 4rem;
    text-transform: uppercase;
    top: 2rem;
    transition: all 0.25s ease-in-out;
  }

  .flat__overlay {
    opacity: 0;
    transition: all 0.25s ease-in-out;
    visibility: collapse;

    &.overlay--visible {
      opacity: 1;
      visibility: visible;
    }
  }
  .flat__main-content {
    background: white;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 40rem;

    .col {
      &.col--right {
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
        margin: 1rem;
        max-width: calc(100% - 40rem);

        .flat__info {
          margin: 2rem;
        }
      }
    }
  }
  .flat__background {
    background-attachment: fixed;
    background-color: #c6c6c6;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(75%);
    height: 100%;
    position: fixed;
    top: 0;
    transition: all 0.5s ease;
    width: 100%;
    z-index: -1;
  }
`
