 const db = require("./models");

const resolver = {
    Query: {
        getTodos: (_, args) => {
            return [
                {
                    id: 1,
                    text: "todo 1",
                    completed: true
                }
            ]
        },
        getTodo: (_, args) => {
            return {
                id: 1,
                text: "todo 1",
                completed: false
            }
        }
    },
    Mutation: {
        createTodo: (_, args) => {
            return {
                id: 1,
                text: "todo 1",
                completed: false
            }
        },
        updateTodo: (_, args) => {
            return {
                id: 1,
                text: "update todo 1",
                completed: false
            }
        }
    }
}

module.exports = resolver;