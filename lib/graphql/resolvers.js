const branchResolver = require("../resolvers/branch")
const {
  lines: linesResolver,
  line: lineResolver
} = require("../resolvers/static")

module.exports = {
  Query: {
    branch: (_, args) => branchResolver(args.id),
    lines: linesResolver,
    line: (_, args) => lineResolver(args.id)
  }
}
