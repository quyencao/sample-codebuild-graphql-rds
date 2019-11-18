 const db = require("./models");

const resolver = {
    Query: {
        getTodos: (_, args) => {
            return db.todos.findAll()
                        .then(todos => {
                            return todos.map(todo => todo.dataValues);
                        })
                        .catch(err => {
                            throw err;
                        });
        },
        getTodo: (_, args) => {
            return db.todos.findByPk(args.id)
                .then(todo => {
                    return todo.dataValues;
                })
                .catch(err => {
                    throw err;
                });
        }
    },
    Mutation: {
        createTodo: (_, args) => {
            return db.todos.create(args.input)
                .then(todo => {
                    return todo.dataValues;
                })
                .catch(err => {
                    throw err;
                });
        },
        updateTodo: (_, args) => {
            return db.todos.update(args.input, { return: true, where: { id: args.id } })
                .then(() => {
                    return db.todos.findByPk(args.id);
                })
                .then((todo) => {
                    return todo.dataValues;
                })
                .catch(err => {
                    throw err;
                });
        },
        deleteTodo: (_, args) => {
            return db.todos.destroy({
                where: { id: args.id }
            }).then(data => {
                return data > 0;
            })
            .catch(err => {
                throw err;
            })
        }
    }
}

module.exports = resolver;