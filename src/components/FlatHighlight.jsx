import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

const FlatHighlight = ({ className, image, description, name }) => (
  <div className={`highlighted-flat ${className}`}>
    <Img className="highlighted-flat__image" fluid={image.fluid} />
    <div className="highlighted-flat__titles">
      <h1 className="highlighted-flat__titles__main-title">{name}</h1>
      <p className="highlighted-flat__titles__subtitle">{description}</p>
    </div>
  </div>
)

export default styled(FlatHighlight)`
  color: #fff;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: -1;

  .gatsby-image-outer-wrapper {
    height: 100%;

    .highlighted-flat__image {
      height: 100%;
      z-index: -1;
    }
  }

  .highlighted-flat__titles {
    bottom: 7rem;
    left: 1rem;
    position: absolute;

    .highlighted-flat__titles__main-title {
      font-size: 3.5rem;
      font-weight: normal;
      letter-spacing: 0.75px;
      line-height: 3.25rem;
      margin-bottom: 2rem;
      width: 80%;
    }
    .highlighted-flat__titles__subtitle {
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0.75px;
    }
  }

  &::before {
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1));
    bottom: 0;
    content: '';
    height: 60%;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 0;
  }
  &::after {
  }
`

FlatHighlight.defaultProps = {
  className: '',
  flat: {},
}

FlatHighlight.propTypes = {
  className: PropTypes.string,
  flat: PropTypes.shape({
    cover: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
}
