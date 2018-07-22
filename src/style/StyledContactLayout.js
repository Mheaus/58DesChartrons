import styled from 'styled-components'

const buttonBackground = "#ff565c"

const StyledContactLayout = styled.div`
  width: 100%;
  .contact__header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 1rem 0;
    .contact__header__user.user {
      display: flex;
      .user__image {
        margin: 0;
        height: 4rem;
        position: relative;
        width: 4rem;
        img {
          border-radius: 50%;
          margin: 0;
          width: 4rem;
        }
        svg {
          bottom: 0;
          height: 1.75rem;
          position: absolute;
          right: -.25rem;
          width: 1.75rem;
        }
      }
      .user__info {
        display: flex;
        flex-direction: column;
        margin: .13rem .5rem;
        .user__info__name {
          font-size: 1.5rem;
          margin: 0;
        }
        .user__info__subtitle {
          margin: 0;
        }
      }
    }
    .contact__header__airbnb-button {
      align-items: center;
      background: ${buttonBackground};
      border: none;
      border-radius: 4px;
      box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 2px 1px -1px rgba(0, 0, 0, 0.12),
        0 1px 1px 0 rgba(0, 0, 0, 0.14);
      cursor: pointer;
      display: flex;
      height: 3rem;
      justify-content: center;
      padding: .125rem 2rem;
      transition: all .15s;
      img {
        height: 2rem;
        filter: brightness(500%);
      }
      &:hover {
        box-shadow:
          0 1px 8px 0 rgba(0, 0, 0, 0.2),
          0 3px 3px -2px rgba(0, 0, 0, 0.12),
          0 3px 4px 0 rgba(0, 0, 0, 0.14);
        opacity: .75;
      }
      &:active {
        box-shadow: none;
        outline: none;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .contact__display-form {
    align-items: center;
    border-bottom: solid 1px rgba(68, 68, 68, 0.85);
    cursor: pointer;
    display: flex;
    font-size: 1.25rem;
    margin: 2rem 0 1rem;
    opacity: .75;
    padding-bottom: .25rem;
    transition: all .25s;
    width: fit-content;
    span {}
    svg {
      height: 1.5rem;
      margin: 0 .75rem;
      transition: all .25s;
    }
    &:hover {
      opacity: 1;
    }
    &.contact__display-form--active {
      opacity: .95;
      svg {
        transform: rotateZ(90deg);
      }
    }
  }
  .contact__form {
    height: 0;
    opacity: 0;
    overflow: hidden;
    position: relative;
    transition: all .5s, opacity .25s;
    visibility: hidden;
    &.contact__form--open {
      visibility: visible;
      opacity: 1;
      height: 20rem;
      .contact__form__submit {
        opacity: 1;
      }
    }
    label {
      display: flex;
      flex-direction: column;
      margin: .25rem 2rem 1rem 0;
      span {
        font-weight: 600;
        opacity: .75;
        margin-bottom: .5rem;
      }
      input {
        border: solid 1px #e9e9e9;
        border-radius: 3px;
        transition: all .25s;
        &:focus {
          outline: none;
        }
      }
      textarea {
        border: solid 1px #e9e9e9;
        border-radius: 3px;
        min-width: 100%;
        max-width: 100%;
        min-height: 10rem;
        max-height: 10rem;
        transition: all .25s;
        &:focus {
          outline: none;
        }
      }
    }
    .contact__form__email {}
    .contact__form__content {}
    .contact__form__submit {
      align-items: center;
      background: ${buttonBackground};
      border: none;
      border-radius: 4px;
      bottom: .5rem;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .25);
      color: white;
      cursor: pointer;
      display: flex;
      justify-content: center;
      opacity: 0;
      padding: .25rem 1.25rem;
      position: absolute;
      right: 2rem;
      transition: all .3s;
      &:active {
        box-shadow: none;
      }
      &:hover {
        opacity: 0.75;
        box-shadow:
          0 1px 3px 1px rgba(0, 0, 0, 0.15),
          0 2px 1px -1px rgba(0, 0, 0, 0.12),
          0 1px 1px 0 rgba(0, 0, 0, 0.14);
      }
      &:focus {
        outline: none;
      }
    }
  }
`

export default StyledContactLayout;
