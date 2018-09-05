import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlatDetailsImage = ({ className, isVisible, imageUrl }) => (
  <div
    className={`flat__image${
      isVisible ? ' flat__image--visible' : ''
    } ${className}`}
  >
    <img src={imageUrl} alt="flat" />
  </div>
)

export default styled(FlatDetailsImage)`
  &.flat__image {
    background: #fff;
    border-radius: 4px;
    display: flex;
    float: left;
    height: 0;
    justify-content: center;
    margin: 0 1rem;
    opacity: 0;
    padding: 0;
    transition: all 0.5s;
    width: calc(100% - 2rem);

    img {
      max-height: 100%;
      transition: all 0.1s;
    }
    &.flat__image--visible {
      height: 40rem;
      height: 40rem;
      margin: 1rem;
      opacity: 1;
      padding: 2rem 1rem;
    }
  }
`

FlatDetailsImage.defaultProps = {
  className: '',
  isVisible: false,
  imageUrl: '',
}

FlatDetailsImage.propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  imageUrl: PropTypes.string,
}
