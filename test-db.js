const db = require("./models");

async function getAll() {
    const todos = await db.todos.findAll();
    console.log(todos.map(todo => todo.dataValues))
}

async function getOne() {
    const data = await db.todos.findByPk(1);
    console.log(data.dataValues)
}

async function create() {
    const data = await db.todos.create({ text: 'John', completed: false });
    console.log(data.dataValues);
}

async function destroy() {
    const data = await db.todos.destroy({ where: { id: 1 } });
    console.log(data);
    console.log(data.dataValues);
}

async function update() {
    const data = await db.todos.update({ text: "updated todo", completed: true }, { return: true, where: { id: 2 } });
    console.log(data);
    console.log(data.dataValues);
}


// models.todo.sync({force: true}).then(() => {
//     // Table created
    // return models.todo.create({
    //   text: 'John'
    // });
//   });

getAll()
// create()
// getOne()
// destroy()
// update()