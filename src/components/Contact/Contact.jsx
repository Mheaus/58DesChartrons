import React, { Component } from 'react'
import PropTypes from 'prop-types'

import userPicture from '../../assets/image/user.jpg'
import airbnbLogo from '../../assets/image/airbnb.png'
import { AngleRight, Medal } from '../../assets/icons'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormOpen: false,
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({
      isFormOpen: !prevState.isFormOpen,
    }))
  }

  render() {
    const { airbnbLink, className } = this.props
    const { isFormOpen } = this.state

    return (
      <div className={`contact ${className}`}>
        <div className="contact__header">
          <button
            type="button"
            className="contact__header__user user"
            onClick={() =>
              window.open('https://www.airbnb.fr/users/show/35326501')
            }
          >
            <div className="user__image">
              <img src={userPicture} alt="Isabelle" />
              <Medal />
            </div>
            <div className="user__info">
              <p className="user__info__name">Isabelle</p>
              <p className="user__info__subtitle">SuperHost AirBnb</p>
            </div>
          </button>
          <button
            className="contact__header__airbnb-button"
            onClick={() => window.open(airbnbLink)}
            type="button"
          >
            <img src={airbnbLogo} alt="logo airbnb" />
          </button>
        </div>

        <button
          className={`contact__display-form${
            isFormOpen ? ' contact__display-form--active' : ''
          }`}
          onClick={() => this.toggleForm()}
          type="button"
        >
          <span>Contacter par mail</span>
          <AngleRight />
        </button>

        <form
          className={`contact__form${isFormOpen ? ' contact__form--open' : ''}`}
          action="https://formspree.io/mathieu.adbrt@gmail.com"
          method="POST"
        >
          <label className="contact__form__email" htmlFor="_replyto">
            <span>Votre Email :</span>
            <input type="email" name="_replyto" required />
          </label>
          <label className="contact__form__content" htmlFor="name">
            <span>Le contenu de votre demande :</span>
            <textarea name="name" required />
          </label>
          <input
            className="contact__form__submit"
            type="submit"
            value="Envoyer"
          />
        </form>
      </div>
    )
  }
}

Contact.defaultProps = {
  airbnbLink: 'https://www.airbnb.fr/users/show/35326501',
  className: '',
}

Contact.propTypes = {
  airbnbLink: PropTypes.string,
  className: PropTypes.string,
}
