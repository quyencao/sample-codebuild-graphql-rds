const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
type Mutation {
  createTodo(input: CreateTodoInput!): Todo!
  updateTodo(input: UpdateTodoInput!): Todo!
  deleteTodo(id: ID!): Boolean!
}

type Query {
  getTodos: [Todo!]
  getTodo(id: ID!): Todo!
}

input CreateTodoInput {
  text: String!
  completed: Boolean!
}

input UpdateTodoInput {
  text: String
  completed: Boolean
}

type Todo {
  id: ID!
  text: String!
  completed: Boolean!
}
`;

module.exports = typeDefs;
