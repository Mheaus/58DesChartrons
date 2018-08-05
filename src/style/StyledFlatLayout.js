import styled from 'styled-components';

const StyledFlatDetailsImage = `
  .flat__image {
    background: #FFF;
    border-radius: 4px;
    display: flex;
    float: left;
    height: 0;
    justify-content: center;
    margin: 0 1rem;
    opacity: 0;
    padding: 0;
    transition: all .5s;
    width: calc(100% - 2rem);

    img {
      max-height: 100%;
      transition: all .1s;
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

const StyledFlatLayout = styled.div`
  height: 100%;
  overflow: scroll;
  padding: 2rem 0;
  position: relative;
  .col {
    &.col--right {
      float: right;
      margin: 2rem;
      width: 32rem;
      .contact {
        background: #FFF;
        border-radius: 2px;
        margin-top: 1rem;
        padding: 1rem 0 0 1rem;
      }
    }
    &.col--left {
      float: left;
      margin: 1rem;
      max-width: calc(100% - 40rem);
    }
  }
  .flat__background {
    background-color: #C6C6C6;
    background-image: url("${props => props.background}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px) brightness(75%);
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  ${StyledFlatDetailsImage}

`

export default StyledFlatLayout;
