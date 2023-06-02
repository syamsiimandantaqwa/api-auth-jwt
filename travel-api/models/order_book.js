'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_book.belongsTo(models.User);

      order_book.hasOne(models.bus, {
        foreignKey: "bus_id",
        as: "bus"
      })
    }
  }
  order_book.init({
    user_id: DataTypes.INTEGER,
    bus_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    jurusan: DataTypes.STRING,
    tujuan: DataTypes.STRING,
    jadwal: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'order_book',
  });
  return order_book;
};