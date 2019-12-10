'use strict'
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {id:{type:DataTypes.NUMBER,allowNull:false,primaryKey:true,autoIncrement:true},username:{type:DataTypes.TEXT,allowNull:false},email:{type:DataTypes.TEXT,allowNull:false}}, {timestamps: false, tableName: 'users'})
  Users.associate = function(models) {
    // associations can be defined here
  }
  return Users
}