import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class RoomList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      openRoomName: null,
    }
  }

  toggleOpen = roomName => {
    const { isAnyRoomOpen } = this.props
    const { openRoomName } = this.state

    if (isAnyRoomOpen) {
      console.log(openRoomName === null || openRoomName !== roomName)
      isAnyRoomOpen(openRoomName === null || openRoomName !== roomName)
    }
    if (openRoomName === roomName) {
      return this.setState({ openRoomName: null })
    }

    return this.setState({ openRoomName: roomName })
  }

  render() {
    const { className, onImageClick, rooms } = this.props
    const { openRoomName } = this.state

    return (
      <div className={`room-list ${className}`}>
        {Object.entries(rooms).map(([key, images]) => (
          <div
            className={`room-list__room room ${key}${
              openRoomName === key ? ' room--opened' : ''
            }`}
            key={key}
          >
            <button
              className="room__title-expand-item"
              onClick={() => this.toggleOpen(key)}
              type="button"
            >
              {key.split('_').join(' ')}
              <svg
                aria-hidden="true"
                data-prefix="far"
                data-icon="angle-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
              >
                <path
                  fill="currentColor"
                  d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
                />
              </svg>
            </button>
            <div className="room__items images">
              {images.map((image, index) => (
                <div
                  className={`images__item images__item${index + 1}`}
                  key={key}
                  onClick={() => onImageClick(image)}
                  onKeyPress={() => onImageClick(image)}
                  role="button"
                  tabIndex="0"
                >
                  <img src={image} alt={`${key}${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

RoomList.defaultProps = {
  className: '',
  isAnyRoomOpen: false,
  onImageClick: null,
  rooms: [],
}

RoomList.propTypes = {
  className: PropTypes.string,
  isAnyRoomOpen: PropTypes.bool,
  onImageClick: PropTypes.func,
  rooms: PropTypes.arrayOf(PropTypes.shape({})),
}
