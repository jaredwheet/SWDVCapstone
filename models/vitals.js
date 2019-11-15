module.exports = function(sequelize, DataTypes) {
    var Vitals = sequelize.define("Vitals", {
      time: {
        type: DataTypes.STRING,
        allowNull: false,
           
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,          
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,          
      }
    })
    return Vitals;
  };
  