'use strict';
const {
  Model
} = require('sequelize');
const { hashSync, genSaltSync } = require('bcrypt')
const {save} = require("debug");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: /@psu.edu\s*$/
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeSave: function (user){
        const salt = genSaltSync(8);
        const hash = hashSync(user.password, salt);
        console.log(user.password, hash)
        user.password = hash
      }
    }
  });
  return User;
};