const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
type Mutation {
  createTodo(input: CreateTodoInput!): Todo
  updateTodo(id: ID!, input: UpdateTodoInput!): Todo
  deleteTodo(id: ID!): Boolean
}

type Query {
  getTodo(id: ID!): Todo
  getTodos: [Todo!]
}

input CreateTodoInput {
  text: String!
  completed: Boolean
}

input UpdateTodoInput {
  text: String
  completed: Boolean
}


type Todo {
  id: ID!
  text: String!
  completed: Boolean
}

`;

module.exports = typeDefs;

