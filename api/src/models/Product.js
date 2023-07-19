const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('Product',{

        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },  
        category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        state:{
            type:DataTypes.BOOLEAN,
            defaultValue: false 
            
        },
        img:{
            type:DataTypes.TEXT,
             allowNull:false 
        }
    })}