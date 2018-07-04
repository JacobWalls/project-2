module.exports = function (sequelize, DataTypes) {
  var Spending = sequelize.define("Spending", {

    monthlyIncome: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
    housing: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
    utilities: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
    cable_internet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
    food: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
    clothing: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      Default: 0,
      len: [0, 1000000]
    },
    beauty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
    entertainment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true,
      len: [0, 1000000]
    },
  });

  Spending.associate = function (models) {
    // We're saying that a Spending should belong to a User
    // Spending can't be created without a user due to the foreign key constraint
    Spending.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Spending;
};