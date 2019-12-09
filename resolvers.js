const db = require('./models');

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
        getUser: (_, args) => {
            return db.users.findByPk(args.id)
                .then(data => {
                    return data.dataValues;
                })
                .catch(err => {
                    throw err;
                });
        },
        getUsers: (_, args) => {
            return db.users.findAll()
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
            return db.todos.create(args.input)
                .then(data => {
                    return data.dataValues;
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
        createUser: (_, args) => {
            return db.users.create(args.input)
                .then(data => {
                    return data.dataValues;
                })
                .catch(err => {
                    throw err;
                });
        },
        updateUser: (_, args) => {
            return db.users.update(args.input, { return: true, where: { id: args.id } })
                .then(() => {
                    return db.users.findByPk(args.id);
                })
                .then(data => {
                    return data.dataValues;
                })
                .catch(err => {
                    throw err;
                });
        },
        deleteUser: (_, args) => {
            return db.users.destroy({
                where: { id: args.id }
            }).then(data => {
                return data > 0;
            })
            .catch(err => {
                throw err;
            })
        },
    }
}

module.exports = resolver;