const db = require('./models');
const { pubSub } = require('./graphqlServerHelper')

const resolver = {
    Query: {
        getTodo: (_, args) => {
            return db.todos.findByPk(args.id)
                .then(data => {
                    return data.dataValues;
                })
                .catch(err => {
                    throw err;
                });
        },
        getTodos: (_, args) => {
            return db.todos.findAll()
                        .then(items => {
                            return items.map(item => item.dataValues);
                        })
                        .catch(err => {
                            throw err;
                        });
        },
    },
    Mutation: {
        createTodo: (_, args) => {
            let fetchData;
            return db.todos.create(args.input)
                .then(data => {
                    fetchData = data.dataValues;
                    return pubSub.publish('CREATE_TODO', data.dataValues);
                })
                .then(() => {
                    return fetchData;
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
                .then(data => {
                    return data.dataValues;
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
        },
    },
    Subscription: {
        createTodo: {
            resolve: rootValue => rootValue,
            subscribe: pubSub.subscribe('CREATE_TODO')
        }
    }
}

module.exports = resolver;