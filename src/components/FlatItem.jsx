import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from 'gatsby'

class FlatItem extends PureComponent {
  formatId = id => (id < 10 ? `0${id}` : id)

  render() {
    const { className, flat, onItemHover } = this.props
    const { id, description, name } = flat

    return (
      <div
        className={`flat-item ${className}`}
        onClick={() => navigate(`/flats/${flat.id}`)}
        onMouseOver={onItemHover}
        onFocus={onItemHover}
        onKeyUp={() => navigate(`/flats/${flat.id}`)}
        role="link"
        tabIndex="0"
      >
        <span className="flat-item__id">{this.formatId(id)}</span>
        <div className="flat-item__info">
          <h3 className="flat-item__info__name">{name}</h3>
          <p className="flat-item__info__description">{description}</p>
        </div>
      </div>
    )
  }
}

export default styled(FlatItem)`
  cursor: pointer;
  margin: 1rem 0 2rem;
  padding: 3rem 0 0 3rem;
  position: relative;
  .flat-item__id {
    font-size: 5rem;
    left: 0;
    opacity: 0.1;
    position: absolute;
    top: 0;
  }
  .flat-item__info {
    position: relative;
    .flat-item__info__name {
      font-size: 1.75rem;
      font-weight: normal;
      margin-bottom: 0.5rem;
    }
    .flat-item__info__description {
      margin-bottom: 0;
      padding-bottom: 1rem;
    }
    &::after {
      background-color: #ff565c;
      bottom: 0;
      content: '';
      height: 0.13rem;
      left: 0;
      position: absolute;
      width: 6rem;
    }
    &::before {
      background-color: #e7e7e7;
      bottom: 0.5px;
      content: '';
      height: 0.075rem;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
`

FlatItem.defaultProps = {
  className: '',
  flat: {},
  onItemHover: null,
}

FlatItem.propTypes = {
  className: PropTypes.string,
  flat: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  onItemHover: PropTypes.func,
}
