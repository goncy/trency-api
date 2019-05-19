const { ApolloServer, gql } = require("apollo-server-express")
const merge = require("lodash.merge")

const { typeDef: Branch, resolvers: branchResolver } = require("./types/branch")
const { typeDef: Line, resolvers: lineResolver } = require("./types/line")

const Query = gql`
  type Query {
    _empty: String
  }
`

const resolvers = {}

const server = new ApolloServer({
  typeDefs: [Query, Branch, Line],
  resolvers: merge(resolvers, branchResolver, lineResolver)
})

module.exports = app => server.applyMiddleware({ app })
