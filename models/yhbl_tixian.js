/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yhbl_tixian', {
    openid: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true
    },
    money: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zhifubao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'yhbl_tixian'
  });
};
