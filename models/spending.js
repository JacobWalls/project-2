module.exports = function(sequelize, DataTypes) {
    var Spending = sequelize.define("Spending", {
      monthlyIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
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
    //     monthlyIncome: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     housing: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     utilities: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     phone: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     cable_internet: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     food: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     clothing: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     beauty: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     },
    //     entertainment: {
    //         type: DataTypes.INTEGER,
    //         isNumeric: true,
    //         len: [0, 100000]
    //     }

    // });

//     Spending.associate = function (models) {
//         //a spending budget must belong to a user_name
//         //a spending budget can't be created without a user_name
//         Spending.belongsTo(models.User, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };
//     return Spending;
// };

/*If time permits, we can come back to add more validations.  For now, I am
only validating for an integer */
