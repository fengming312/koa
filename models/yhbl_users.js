/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yhbl_users', {
    openid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    session_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    points: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    money: {
      type: DataTypes.FLOAT(11),
      allowNull: true
    },
    shareStatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    signStatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nickName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatarUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    language: {
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
    tableName: 'yhbl_users'
  });
};
