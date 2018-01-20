/* jshint indent: 2 */
//  sequelize-auto -o "./models" -d senhuorcom -h rm-bp1bmc6v6q9k1iri2.mysql.rds.aliyuncs.com -u dbsenhuorcom -p 3306 -x DB120522987senhuo -e mysql -t sh_goods 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sh_goods', {
    // aid: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    fid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    // sid: {
    //   type: DataTypes.STRING(15),
    //   allowNull: false
    // },
    // flag: {
    //   type: DataTypes.INTEGER(3).UNSIGNED,
    //   allowNull: false,
    //   primaryKey: true
    // },
    // cate: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false,
    //   primaryKey: true
    // },
    num_iid: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    // keywords: {
    //   type: DataTypes.STRING(250),
    //   allowNull: false
    // },
    // description: {
    //   type: DataTypes.STRING(250),
    //   allowNull: false
    // },
    // sort: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false,
    //   defaultValue: '0',
    //   primaryKey: true
    // },
    nick: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    picurl: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // url: {
    //   type: DataTypes.STRING(400),
    //   allowNull: false
    // },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    // message: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // start_time: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false
    // },
    // end_time: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false
    // },
    yh_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    // views: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false
    // },
    // like: {
    //   type: DataTypes.INTEGER(11).UNSIGNED,
    //   allowNull: false
    // },
    // bili: {
    //   type: DataTypes.INTEGER(10),
    //   allowNull: false
    // },
    // shop_type: {
    //   type: DataTypes.INTEGER(1).UNSIGNED,
    //   allowNull: false
    // },
    // ly: {
    //   type: DataTypes.STRING(250),
    //   allowNull: false
    // },
    // type: {
    //   type: DataTypes.STRING(10),
    //   allowNull: false
    // },
    // type_id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false
    // },
    // sum: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false
    // },
    juan_url: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    juan_price: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    quan_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    quan_sum: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    // tkl: {
    //   type: DataTypes.STRING(30),
    //   allowNull: false
    // },
    // dateline: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false
    // },
    // posttime: {
    //   type: DataTypes.INTEGER(10).UNSIGNED,
    //   allowNull: false
    // },
    // bili_type: {
    //   type: DataTypes.INTEGER(1),
    //   allowNull: false
    // },
    // status: {
    //   type: DataTypes.INTEGER(2),
    //   allowNull: false
    // },
    // brand_id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false
    // },
    // dtk_id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false
    // }
  }, {
    tableName: 'sh_goods',
    timestamps: false
  });
};
