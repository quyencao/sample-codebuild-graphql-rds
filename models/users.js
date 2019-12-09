'use strict'
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {id:{type:DataTypes.NUMBER,allowNull:false,primaryKey:true,autoIncrement:true},email:{type:DataTypes.TEXT,allowNull:false},username:{type:DataTypes.TEXT,allowNull:true},gender:{type:DataTypes.TEXT,allowNull:true}}, {timestamps: false, tableName: 'users'})
  Users.associate = function(models) {
    // associations can be defined here
  }
  return Users
}