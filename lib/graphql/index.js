const { ApolloServer, gql } = require("apollo-server-express")

const branchResolver = require("../resolvers/branch")
const {
  lines: linesResolver,
  line: lineResolver
} = require("../resolvers/static")

const typeDefs = gql`
  # BRANCH
  type BranchArrival {
    minutos_1: Int!
    minutos_2: Int!
    minutos_3: Int!
    minutos_4: Int!
    nombre: String!
  }

  type BranchPosition {
    estado_mov: Int!
    estado_servicio: Int!
    formacion_id: Int!
    latitud: Int!
    longitud: Int!
    ramal: Int!
  }

  type Branch {
    arrivals: [BranchArrival]!
    positions: [BranchPosition]!
  }

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
    name: String!
    slug: String!
    path: String!
    directions: [LineBranchDirection]!
    stations: [LineBranchStation]!
  }

  type Line {
    id: Int!
    name: String!
    branches: [LineBranch]!
  }

  type Query {
    branch(id: Int!): Branch
    lines: [Line]
    line(id: Int!): Line
  }
`

const resolvers = {
  Query: {
    branch: (_, args) => branchResolver(args.id),
    lines: linesResolver,
    line: (_, args) => lineResolver(args.id)
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = app => server.applyMiddleware({ app })
