import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlatDetails = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export default styled(FlatDetails)`
  background: #fff;
  border-radius: 4px;
  padding: 4rem 2rem;
  ul {
    list-style: none;
  }
`

FlatDetails.defaultProps = {
  children: null,
  className: '',
}

FlatDetails.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
}
