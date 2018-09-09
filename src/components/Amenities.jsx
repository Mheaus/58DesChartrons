import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// class Amenities extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }
//
//   render() {
//     return <div />
//   }
// }

const Amenities = ({ className, html, htmlAst }) => {
  const { children } = htmlAst

  return (
    <div className={className}>
      {JSON.stringify(children)}
    </div>
  )
}

export default styled(Amenities)``

Amenities.defaultProps = {}

Amenities.propTypes = {}
