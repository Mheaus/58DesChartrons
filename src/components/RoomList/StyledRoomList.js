import styled from 'styled-components'

import RoomList from './RoomList'

export default styled(RoomList)`
  .room-list__room {
  }
  .room {
    .room__title-expand-item {
      align-items: center;
      appearance: none;
      background: #fff;
      border: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
      display: flex;
      margin: 0.25rem 0;
      padding: 0.75rem 2.5rem;
      text-align: left;
      text-transform: capitalize;
      width: 100%;
      svg {
        height: 1rem;
        margin-left: 0.75rem;
        opacity: 0.75;
        transition: all 0.5s;
      }
      &:focus {
        outline: none;
      }
    }
    .room__items {
      max-height: 0;
      overflow: scroll;
      padding: 0;
      transition: all 0.5s;
    }
    &.room--opened {
      .room__title-expand-item svg {
        transform: rotateZ(90deg);
      }
      .room__items {
        padding: 0.5rem;
        max-height: 32rem;
      }
    }
  }

  .images {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.75rem;
    .images__item {
      height: 5.75rem;
      overflow: hidden;
      position: relative;
      img {
        top: -33%;
        position: absolute;
      }
    }
  }
`
