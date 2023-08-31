module.exports = (sequelize, DataTypes) => {
    const alias = 'usuarios';

    const cols = {
        id_usuarios: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
           
        },
        apellido: {
            type: DataTypes.STRING,
        },
        
        email:{
            type: DataTypes.STRING,
        },
        contraseña: {
            type: DataTypes.STRING,
        },
       
    }


const config = {
    tableName: 'usuarios',
    timestamps: false
}

const Carrito = sequelize.define (alias, cols,config)

Carrito.associate = (models) =>{
//Aca hacemos las relaciones
// sequelize.sync({ force: true }).then(() => {
//     console.log('Tabla de usuarios creada.');
//   }); 
 } 

return id_usuarios;
}