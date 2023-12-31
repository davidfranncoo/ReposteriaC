const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('User', {

        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        username:{
            type:DataTypes.STRING,
            allowNull: false
            
        },
        age:{
            type:DataTypes.INTEGER,
            
           
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },  
        email:{
            type:DataTypes.STRING,
            allowNull: false
            
        }

    })
    } 