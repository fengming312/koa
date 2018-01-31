/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yhbl_activity', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    imgUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    width: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    height: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mgt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mgl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    show: {
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
    tableName: 'yhbl_activity'
  });
};
