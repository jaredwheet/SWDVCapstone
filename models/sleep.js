module.exports = function(sequelize, DataTypes) {
  var Sleep = sequelize.define("Sleep", {
    timeStart: {
      type: DataTypes.STRING,
      allowNull: false,
         
    },
    timeEnd: {
      type: DataTypes.STRING,
      allowNull: false,
        
    }
  })
  return Sleep;
};