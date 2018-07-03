import React from 'react'
import styled from 'styled-components'

const Flat = styled.div`
  cursor: pointer;
  margin: 1rem 0 2rem;
  padding: 3rem 0 0 3rem;
  position: relative;
  .flat-item__id {
    font-size: 5rem;
    left: 0;
    opacity: .1;
    position: absolute;
    top: 0;
  }
  .flat-item__info {
    position: relative;
    .flat-item__info__name {
      font-size: 1.75rem;
      font-weight: normal;
      margin-bottom: .5rem;
    }
    .flat-item__info__description {
      margin-bottom: 0;
      padding-bottom: 1rem;
    }
    &::after {
      background-color: #FF565C;
      bottom: 0;
      content: "";
      height: .13rem;
      left: 0;
      position: absolute;
      width: 6rem;
    }
    &::before {
      background-color: #e7e7e7;
      bottom: .5px;
      content: "";
      height: .075rem;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
`

export default class FlatItem extends React.PureComponent {
  formatId = (id) => {
    return id < 10 ? `0${id}` : id
  }
  render() {
    const { flat } = this.props;
    return (
      <Flat
        className="flat-item"
        onClick={() => window.___history.push(`/flats/${flat.id}`)}
        onMouseOver={this.props.onItemHover}
      >
        <span className="flat-item__id">{this.formatId(flat.id)}</span>
        <div className="flat-item__info">
          <h3 className="flat-item__info__name">{flat.name}</h3>
          <p className="flat-item__info__description">{flat.description}</p>
        </div>
      </Flat>
    )
  }
}
