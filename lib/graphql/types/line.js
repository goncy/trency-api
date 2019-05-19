const { gql } = require("apollo-server-express")

const {
  lines: linesResolver,
  line: lineResolver
} = require("../../resolvers/static")

const typeDef = gql`
  # LINE
  type LineBranchDirection {
    id: Int!
    name: String!
    color: String!
  }

  type LineBranchStationPosition {
    lat: Int!
    lng: Int!
  }

  type LineBranchStation {
    index: Int!
    id: Int!
    name: String!
    position: LineBranchStationPosition!
  }

  type LineBranch {
    id: Int!
    name(repeat: Int): String!
    slug: String!
    path: String!
    directions: [LineBranchDirection]!
    stations: [LineBranchStation]!
  }

  type Line {
    id: String!
    name: String!
    branches: [LineBranch]!
  }

  extend type Query {
    lines: [Line]
    line(id: String!): Line
  }
`

const resolvers = {
  Query: {
    lines: linesResolver,
    line: (_, args) => lineResolver(args.id)
  }
}

module.exports = {
  typeDef,
  resolvers
}
