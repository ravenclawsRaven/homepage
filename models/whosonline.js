'use strict';
module.exports = (sequelize, DataTypes) => {
  const home = sequelize.define('home', {
    name: DataTypes.STRING,
    mac: DataTypes.STRING
  }, {});
  home.associate = function(models) {
    // associations can be defined here
  };
  return home;
};