module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    storeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    storeCategory: {
      type: DataTypes.STRING
    },
    sale: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    storeCity: {
      type: DataTypes.STRING
    },
    storeState: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    stopDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  // Post.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Post;
};
