const { ApolloServer } = require("apollo-server-express")

const typeDefs = require("./schema")
const resolvers = require("./resolvers")

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = app => server.applyMiddleware({ app })
