const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('Carrito', {

        idname:{
            type:DataTypes.STRING,
            // allowNull:false, 
        },
        precio:{
            type:DataTypes.STRING,
            // allowNull:false,

            
        },
        descripcion:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            // allowNull:false,
           
        },
        texto:{
            type:DataTypes.STRING,
            // allowNull:false,

        }
    } 
    )}