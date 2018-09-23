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

  &.flat--banner-visible .flat__main-content .flat__main-content__container {
    .col--right.col--right {
      position: unset;
    }
    .col--left.col--left {
      margin-right: 2rem;
    }
  }

  &.flat--locked {
    overflow: hidden;
  }

  .button-open {
    background: white;
    border-radius: 2px;
    color: rgb(56, 56, 60, 0.75);
    cursor: pointer;
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
    margin-top: 40rem;
    padding: 2rem 0 8rem;

    .flat__main-content__container {
      display: flex;
      flex-direction: row-reverse;
      margin: 0 auto;
      position: relative;
      width: 80rem;

      .col {
        &.col--right {
          margin: 2rem;
          position: fixed;
          right: 20rem;
          top: 5rem;
          transition: all 0.5s;
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
          margin-right: 38rem;

          .flat__amenities {
            background: white;
            max-width: 40rem;
            box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
              0 3px 14px 2px rgba(0, 0, 0, 0.12),
              0 8px 10px 1px rgba(0, 0, 0, 0.14);
            max-height: calc(100% - 12rem);
            opacity: 0;
            overflow: scroll;
            padding: 4rem;
            position: fixed;
            top: 8.75rem;
            transform: translateX(4rem);
            transition: all 0.25s ease-in-out;
            visibility: collapse;

            &.flat__amenities--visible {
              opacity: 1;
              transform: translateX(0);
              visibility: visible;
              z-index: 2;
            }

            .flat__amenities__title {
              overflow: visible;
              position: relative;

              .flat__amenities__icon-container {
                align-items: center;
                border-radius: 50%;
                box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                  0 1px 10px 0 rgba(0, 0, 0, 0.12),
                  0 4px 5px 0 rgba(0, 0, 0, 0.14);
                cursor: pointer;
                display: flex;
                height: 2.25rem;
                justify-content: center;
                position: absolute;
                right: 0;
                top: -0.5rem;
                transition: all 0.25s;
                width: 2.25rem;

                &:hover {
                  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 6px 10px 0 rgba(0, 0, 0, 0.14);
                  transform: scale(1.05);
                }

                .flat__amenities__icon-close {
                  height: 1rem;
                  width: 1rem;
                }
              }
            }
          }

          .flat__info {
            margin: 2rem;

            &.flat__info--hidden {
              opacity: 0;
              z-index: -1;
            }
          }
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

  @media screen and (max-width: 1216px) {
    .flat__main-content__container.flat__main-content__container.flat__main-content__container {
      align-items: center;
      flex-direction: column-reverse;
      max-width: 48rem;
      width: 100%;

      .col--right {
        position: unset !important;
        width: calc(100% - 4rem);
      }

      .col--left.col--left.col--left {
        margin-right: 0;
        max-width: 100%;
      }
    }
  }
  @media screen and (min-width: 1216px) and (max-width: 1900px) {
    .flat__main-content__container.flat__main-content__container.flat__main-content__container {
      .col--right {
        margin: 2rem 0;
        right: 5% !important;
      }

      .col--left.col--left.col--left {
      }
    }
  }
`
