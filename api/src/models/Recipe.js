const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nickname:{
        type: DataTypes.STRING,
        allowNull: false        
      },
      status:{
        type: DataTypes.STRING,
        allowNull: false
      },
      createInDb:{
        type: DataTypes.BOOLEAN,
        allowNull: null,
        defaultValue: true
      }
    

  });
};
