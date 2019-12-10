const db = require('./models');
const pubSub = require('./pubSubHelper');

const resolver = {
    Query: {
        getTodo: async (_, args) => {
            try {
                const item = await db.todos.findByPk(args.id);
                return item.dataValues;
            } catch (err) {
                throw err;
            }
        },
        getTodos: (_, args) => {
            try {
                const items = db.todos.findAll();
                return items.map(item => item.dataValues);
            } catch (err) {
                throw err;
            }
        },
    },
    Mutation: {
        createTodo: async (_, args) => {
            try {
                const type = 'CREATE_TODO';
                const item = await db.todos.create(args.input);
                await pubSub.publish(type, {
                    type,
                    data: item.dataValues
                });
                return item.dataValues;
            } catch (err) {
                throw err;
            }
        },
        updateTodo: async (_, args) => {
            try {
                const type = 'UPDATE_TODO';
                await db.todos.update(args.input, { return: true, where: { id: args.id } });
                const item = await db.todos.findByPk(args.id);
                await pubSub.publish(type, {
                    type,
                    data: item.dataValues
                });
                return item.dataValues;
            } catch (err) {
                throw err;
            }
        },
        deleteTodo: async (_, args) => {
            try {
                const type = 'DELETE_TODO';
                const item = await db.todos.findByPk(args.id);
                const data = await db.todos.destroy({ where: { id: args.id } });
                await pubSub.publish(type, {
                    type,
                    data: item.dataValues
                });
                return data > 0;
            } catch (err) {
                throw err;
            }
        },
    },
    Subscription: {
        createTodo: {
            resolve: rootValue => rootValue,
            subscribe: pubSub.subscribe('CREATE_TODO')
        },
        updateTodo: {
            resolve: rootValue => rootValue,
            subscribe: pubSub.subscribe('UPDATE_TODO')
        },
        deleteTodo: {
            resolve: rootValue => rootValue,
            subscribe: pubSub.subscribe('DELETE_TODO')
        }
    }
}

module.exports = resolver;