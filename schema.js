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

type Subscription {
  createTodo: TodoSubscriptionPayload!
  updateTodo: TodoSubscriptionPayload!
  deleteTodo: TodoSubscriptionPayload!
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

type TodoSubscriptionPayload {
  type: String!
  data: Todo!
}

`;

module.exports = typeDefs;