import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  
  .room-list__room {

  }
  .room {

    .room__title-expand-item {
      align-items: center;
      appearance: none;
      border: none;
      box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 2px 1px -1px rgba(0, 0, 0, 0.12),
        0 1px 1px 0 rgba(0, 0, 0, 0.14);
      display: flex;
      margin: .25rem 0;
      padding: .75rem 2.5rem;
      text-align: left;
      text-transform: capitalize;
      width: 100%;
      svg {
        height: 1rem;
        margin-left: .75rem;
        opacity: .75;
        transition: all .5s;
      }
      &:focus {
        outline: none;
      }
    }
    .room__items {
      max-height: 0;
      overflow: scroll;
      padding: 0;
      transition: all .5s;
    }
    &.room--opened {
      .room__title-expand-item svg {
        transform: rotateZ(90deg);
      }
      .room__items {
        padding: .5rem;
        max-height: 32rem;
      }
    }
  }

  .images {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: .5rem;
    .images__item {
      height: 5.75rem;
      overflow: hidden;
      img {

      }
    }
  }
`

class RoomList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openRoomName: null
    };
  }
  toggleOpen = (roomName) => {
    if (this.props.isAnyRoomOpen) {
      console.log(this.state.openRoomName === null || this.state.openRoomName !== roomName);
      this.props.isAnyRoomOpen(this.state.openRoomName === null || this.state.openRoomName !== roomName)
    }
    if (this.state.openRoomName === roomName) this.setState(prevState => ({openRoomName: null}))
    else this.setState(prevState => ({openRoomName: roomName}))
  }
  render() {
    return (
      <Layout className="room-list">
        {Object.entries(this.props.rooms).map(([key, images], index) => (
          <div
            className={`room-list__room room ${key}${this.state.openRoomName === key ? " room--opened" : ""}`}
            key={index}
          >
            <button className="room__title-expand-item" onClick={() => this.toggleOpen(key)}>
              {key.split("_").join(" ")}
              <svg aria-hidden="true" data-prefix="far" data-icon="angle-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path fill="currentColor" d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"/>
              </svg>
            </button>
            <div className="room__items images">
              {images.map((image, index) => (
                <div
                  className={`images__item images__item${index + 1}`}
                  key={index}
                  onClick={() => this.props.onImageClick(image)}
                >
                  <img src={image} alt={`${key}${index + 1}`}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Layout>
    )
  }
}

export default RoomList;
