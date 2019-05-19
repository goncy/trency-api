const { gql } = require("apollo-server-express")

const branchResolver = require("../../resolvers/branch")

const typeDef = gql`
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

  extend type Query {
    branch(id: Int!): Branch
  }
`

const resolvers = {
  Query: {
    branch: (_, args) => branchResolver(args.id)
  }
}

module.exports = {
  typeDef,
  resolvers
}
