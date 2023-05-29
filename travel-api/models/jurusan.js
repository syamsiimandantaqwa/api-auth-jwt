'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jurusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jurusan.hasMany(models.bus_by_jurusan, {
        foreignKey: "jurusan_id"
      })
    }
  }
  jurusan.init({
    nama: DataTypes.STRING,
    jurusan_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'jurusan',
  });
  return jurusan;
};