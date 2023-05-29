'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bus_by_jurusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bus_by_jurusan.belongsTo(models.bus)
      bus_by_jurusan.belongsTo(models.jurusan)

    }
  }
  bus_by_jurusan.init({
    jurusan_id: DataTypes.INTEGER,
    bus_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'bus_by_jurusan',
  });
  return bus_by_jurusan;
};