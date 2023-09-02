module.exports = (sequelize, DataTypes) => {
    const alias = 'Usuarios';

    const cols = {
        id_usuario: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
           
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        email:{
            type: DataTypes.STRING,
            allowNull: true
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: true
        },
       
    }


const config = {
    tableName: 'Usuarios',
    timestamps: false
}

const Usuarios = sequelize.define (alias, cols,config)
/* 
Usuarios.associate = (models) =>{
//Aca hacemos las relaciones
 }  */

return Usuarios;
}