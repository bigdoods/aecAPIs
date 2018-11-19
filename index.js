const express = require('express')
let port = 3000
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

// Construct graphQL schema
let schema = buildSchema(`
  type Query {
    title: String,
    description: String,
    https: Boolean,
    url: String
  }
`)

// Define root
let root = {
  title: () => {
    return "api title"
  },
  description: () => {
    return "api description"
  },
  https: () => {
    return true
  },
  url: () => {
    return "url of this api"
  }
}

const app = express()

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port)
console.log("server started on port ", port)



