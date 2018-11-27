'use strict';
module.exports = (sequelize, DataTypes) => {
  const planets = sequelize.define('planets', {
    name: DataTypes.STRING,
    pop_civ: DataTypes.INTEGER,
    farms: DataTypes.INTEGER,
    food: DataTypes.INTEGER,
    metals: DataTypes.INTEGER,
    capital: DataTypes.INTEGER,
    q1: DataTypes.ARRAY(DataTypes.STRING),
    q2: DataTypes.ARRAY(DataTypes.STRING),
    q3: DataTypes.ARRAY(DataTypes.STRING)
 
    
  }, {});
  planets.associate = function(models) {
    // associations can be defined here
  };
  return planets;
};