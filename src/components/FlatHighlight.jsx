import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlatHighlight = ({ className, flat }) => {
  const { cover, description, name } = flat

  return (
    <div
      className={`highlighted-flat ${className}`}
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h1 className="highlighted-flat__title">{name}</h1>
      <p className="highlighted-flat__subtitle">{description}</p>
    </div>
  )
}

export default styled(FlatHighlight)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
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
    letter-spacing: 0.75px;
    line-height: 3.25rem;
    margin-bottom: 2rem;
    width: 80%;
  }
  .highlighted-flat__subtitle {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.75px;
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
    z-index: -1;
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
