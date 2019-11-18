'use strict'
module.exports = (sequelize, DataTypes) => {
  const Todos = sequelize.define('todos', {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {})
  Todos.associate = function(models) {
    // associations can be defined here
  }
  return Todos
}