import * as PropTypes from "prop-types"
import React from "react"
import Flat from '../components/flat'

class PostTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      flatsJson: PropTypes.object.isRequired,
    }),
  }
  render() {
    return (
      <Flat />
    )
  }
}

export default PostTemplate

// The flat template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
// eslint-disable-next-line
export const pageQuery = graphql`
  query FlatsQuery($id: String!) {
    # Select the flat which equals this id.
    flatsJson(id: { eq: $id }) {
      ...Flat_details
    }
  }
`
