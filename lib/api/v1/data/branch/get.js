const branchResolver = require("../../../../resolvers/branch")

module.exports = async (req, res) => {
  try {
    res.json({ response: await branchResolver(req.params.branch) })
  } catch (error) {
    res.status(500).send(error)
  }
}
