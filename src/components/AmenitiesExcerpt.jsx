import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { AngleRight } from '../assets/icons'

class Amenities extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { className, excerpt, onClick } = this.props

    return (
      <div className={`amenities-excerpt ${className}`}>
        <h3 className="amenities-excerpt__title">Équipements :</h3>
        <p className="amenities-excerpt__content">{excerpt}</p>
        <button
          className="amenities-excerpt__button-open"
          type="button"
          onClick={onClick}
        >
          afficher tout les équipements
          <AngleRight className="amenities-excerpt__button-open__angle-right" />
        </button>
      </div>
    )
  }
}

export default styled(Amenities)`
  &.amenities-excerpt {
    padding: 1rem;

    .amenities-excerpt__content {
      padding-right: 0.5rem;
    }

    .amenities-excerpt__button-open {
      color: var(--color-secondary);
      cursor: pointer;
      opacity: 0.75;
      padding: 0;
      text-transform: capitalize;
      transition: all 0.25s;

      &:hover {
        opacity: 1;
      }

      .amenities-excerpt__button-open__angle-right {
        height: 1rem;
        margin: 0 0.5rem -0.125rem;
      }
    }
  }
`

Amenities.defaultProps = {
  className: '',
  excerpt: '',
  onClick: () => null,
}

Amenities.propTypes = {
  className: PropTypes.string,
  excerpt: PropTypes.string,
  onClick: PropTypes.func,
}
