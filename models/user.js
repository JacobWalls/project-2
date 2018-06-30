module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the user model a name of type STRING
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING
    
  });

  User.associate = function (models) {
    // Associating User with Spending
    // When an User is deleted, also delete any associated Spending
    User.hasOne(models.Spending, {
      onDelete: "cascade"
    });
  };

  return User;
};