import React from 'react'
import styled from 'styled-components'

import userPicture from '../assets/image/user.jpg'
import airbnbLogo from '../assets/image/airbnb.png'

const ContactLayout = styled.div`
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
      background: #ff565c;
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
      background: #FFF;
      border: none;
      border-radius: 4px;
      bottom: .5rem;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, .75);
      cursor: pointer;
      display: flex;
      justify-content: center;
      opacity: 0;
      padding: .25rem 1.25rem;
      position: absolute;
      right: 2rem;
      transition: all .3s;
      &:hover {
        background: #ff565c;
        color: white;
        box-shadow:
          0 1px 3px 0 rgba(0, 0, 0, 0.2),
          0 2px 1px -1px rgba(0, 0, 0, 0.12),
          0 1px 1px 0 rgba(0, 0, 0, 0.14);
      }
      &:focus {
        outline: none;
      }
    }
  }
`

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
    };
  }
  toggleForm = () => {
    this.setState(prevState => ({
      isFormOpen: !prevState.isFormOpen
    }))
  }
  render() {
    return (
      <ContactLayout className="contact">
        <div className="contact__header">
          <div className="contact__header__user user">
            <div className="user__image">
              <img src={userPicture} alt="Isabelle"/>
              <svg viewBox="0 0 14 24" aria-label="Isabelle est un Superhost." display="block">
                <path d="M10.5 20a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M.505 1.414L.5 9.55c0 .458.217.89.589 1.171l5.077 3.832a1.382 1.382 0 0 0 1.657 0l5.081-3.826c.372-.279.59-.71.59-1.168l.006-8.14a.926.926 0 0 0-.94-.913L1.445.5a.926.926 0 0 0-.939.913" fill="#fff"/>
                <path d="M12 9.5L7 5.799 12 2zm-6.13 9.187c-.521.319-.87.877-.87 1.515C5 21.196 5.837 22 6.87 22a1.86 1.86 0 0 0 1.76-1.21z" fill="#ffb400"/>
                <path d="M12 9.5l-5 3.75L2 9.5V2z" fill="#ff5a5f"/>
                <path d="M7 24c-2.206 0-4-1.794-4-3.999C3 17.795 4.794 16 7 16s4 1.795 4 4.001A4.004 4.004 0 0 1 7 24zm0-7c-1.654 0-3 1.347-3 3.001C4 21.654 5.346 23 7 23s3-1.346 3-2.999A3.004 3.004 0 0 0 7 17zm.004-1.824c-.456 0-.912-.107-1.262-.317L.696 10.995C.226 10.631 0 10.143 0 9.5v-8C.001 1.127.168.747.458.457.748.167 1.127 0 1.499 0H12.5c.785 0 1.5.715 1.5 1.5v7.928c-.001.676-.242 1.218-.695 1.567l-5.001 3.832c-.35.234-.825.349-1.3.349zM1.498 1a.51.51 0 0 0-.333.164A.52.52 0 0 0 1 1.5V9.5c0 .33.089.534.307.703l4.997 3.831c.333.195 1.086.2 1.42-.02l4.972-3.813c.2-.154.303-.415.304-.775V1.5c0-.229-.271-.5-.5-.5H1.499h-.001z" fill="#484848"/>
              </svg>
            </div>
            <div className="user__info">
              <p className="user__info__name">Isabelle</p>
              <p className="user__info__subtitle">SuperHost AirBnb</p>
            </div>
          </div>
          <button className="contact__header__airbnb-button" onClick={() => window.open("https://www.airbnb.fr/users/show/35326501")}>
            <img src={airbnbLogo} alt="logo airbnb"/>
          </button>
        </div>

        <div className={`contact__display-form${this.state.isFormOpen ? " contact__display-form--active" : ""}`} onClick={() => this.toggleForm()}>
          <span>Contacter par mail</span>
          <svg aria-hidden="true" data-prefix="far" data-icon="angle-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
            <path fill="currentColor" d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"/>
          </svg>
        </div>

        <form className={`contact__form${this.state.isFormOpen ? " contact__form--open" : ""}`} action="https://formspree.io/mathieu.adbrt@gmail.com" method="POST">
          <label className="contact__form__email">
            <span>Votre Email :</span>
            <input type="email" name="_replyto" required />
          </label>
          <label className="contact__form__content" >
            <span>Le contenu de votre demande :</span>
            <textarea name="name" required />
          </label>
          <input className="contact__form__submit" type="submit" value="Envoyer" />
        </form>

      </ContactLayout>
    )
  }
}
