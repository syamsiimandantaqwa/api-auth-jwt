'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bus.hasMany(models.bus_by_jurusan, {
        foreignKey: "bus_id",
      })

      bus.belongsTo(models.order_book, {
        foreignKey: "bus_id",
      });
    }
  }
  bus.init({
    bus_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nama_bus: DataTypes.STRING,
    tarif: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'bus',
  });
  return bus;
};