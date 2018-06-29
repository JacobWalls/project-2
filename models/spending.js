module.exports = function(sequelize, DataTypes) {
    var Spending = sequelize.define("Spending", {
      housing: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      utilities: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cable_internet: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      food: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      clothing: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      beauty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      entertainment: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
  
    Spending.associate = function(models) {
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
