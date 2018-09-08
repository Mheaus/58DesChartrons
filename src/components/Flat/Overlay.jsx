import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Close from '../../assets/icons'
import RoomList from '../RoomList'

class Overlay extends PureComponent {
  constructor(props) {
    super(props)

    const { defaultImageUrl } = this.props

    this.state = {
      imageUrl: defaultImageUrl,
    }
  }

  render() {
    const { imageUrl } = this.state
    const { className, onClose, rooms } = this.props

    return (
      <div className={`overlay ${className}`}>
        <div className="overlay__image-container">
          <img src={imageUrl} alt="flat" className="overlay__image" />
        </div>
        <div className="overlay__aside-right">
          <Close className="overlay__aside-right__close" onClick={onClose} />
          <RoomList
            rooms={rooms}
            onImageClick={newImageUrl =>
              this.setState({ imageUrl: newImageUrl })
            }
          />
        </div>
      </div>
    )
  }
}

export default styled(Overlay)`
  &.overlay {
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    height: calc(100% - 4.75rem);
    left: 0;
    padding: 0 2rem;
    position: fixed;
    right: 0;
    top: 4.75rem;
    width: 100%;
    z-index: 1;

    .overlay__image-container {
      margin: 4rem 2rem;
      max-height: 100%;
      position: relative;
      text-align: center;
      width: 60%;

      .overlay__image {
        height: 100%;
        max-height: 100%;
        width: auto;
      }
    }

    .overlay__aside-right {
      padding: 4rem 2rem;
      position: relative;
      width: 40%;

      .overlay__aside-right__close {
        cursor: pointer;
        height: 1.5rem;
        position: absolute;
        right: 2rem;
        top: 2.75rem;
        transition: all 0.25s;
        width: 1.5rem;

        &:hover {
          transform: scale(1.15);
        }
      }

      .room-list {
        margin: 4rem 0;
      }
    }
  }
`

Overlay.defaultProps = {
  className: '',
  defaultImageUrl: '',
  onClose: () => null,
  rooms: [],
}

Overlay.propTypes = {
  className: '',
  defaultImageUrl: PropTypes.string,
  onClose: PropTypes.func,
  rooms: PropTypes.arrayOf(PropTypes.shape({})),
}
