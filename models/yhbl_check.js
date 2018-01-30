/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yhbl_check', {
    tagShow: {
      type: DataTypes.STRING(11),
      allowNull: false
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
    tableName: 'yhbl_check'
  });
};
