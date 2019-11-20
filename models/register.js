module.exports = function(sequelize, DataTypes) {
    var Register = sequelize.define("Register", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,           
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,          
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,          
      },
      babysName: {
        type: DataTypes.STRING,
        allowNull: false,          
      },
      babysBirthday: {
        type: DataTypes.STRING,
        allowNull: false,          
      }
    })
    return Register;
  };
  