import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = ({ className, titles }) => (
  <header className={`header ${className}`}>
    <div className="header__group-left">
      {titles.map(title => (
        <button
          key={title.name}
          onClick={() => window.___history.push(`/${title.url}`)}
          type="button"
        >
          <h1
            className={`header__title${
              typeof window !== 'undefined' &&
              window.location.pathname.substr(1) === title.url
                ? ' header__title--active'
                : ' header__title--unactive'
            }`}
          >
            {title.name}
          </h1>
        </button>
      ))}
    </div>
  </header>
)

export default styled(Header)`
  background: #fff;
  border-bottom: solid 1px #ebebeb;
  display: flex;
  padding: 1.75rem 1rem;
  .header__group-left {
    display: flex;
  }
  .header__title {
    cursor: pointer;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.75px;
    margin: 0 1rem;
    text-transform: uppercase;
    transition: all 0.25s;
    &:hover {
      opacity: 0.85;
    }
    &.header__title--active {
    }
    &.header__title--unactive {
      opacity: 0.5;
    }
  }
`

Header.defaultProps = {
  className: '',
  titles: [],
}

Header.propTypes = {
  className: PropTypes.string,
  titles: PropTypes.arrayOf(PropTypes.string),
}
