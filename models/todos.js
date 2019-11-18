'use strict'
module.exports = (sequelize, DataTypes) => {
  const Todos = sequelize.define('todos', {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, { timestamps: false })
  Todos.associate = function(models) {
    // associations can be defined here
  }
  return Todos
}