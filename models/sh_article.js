/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sh_article', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    picurl: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tpl: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    hide: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    keywords: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    views: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dateline: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'sh_article',
    timestamps: false
  });
};
