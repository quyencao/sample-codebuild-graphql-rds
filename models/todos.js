'use strict'
module.exports = (sequelize, DataTypes) => {
  const Todos = sequelize.define('todos', {
    id: {
      type: DataTypes.NUMBER,
      AllowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      AllowNull:false
    },
    completed: {
      AllowNull:false
    }
  }, {})
  Todos.associate = function(models) {
    // associations can be defined here
  }
  return Todos
}