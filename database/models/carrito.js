module.exports = (sequelize, DataTypes) => {
    const alias = 'Carrito';

    const cols = {
        id_carrito: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        
        estado_pedido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_finalizacion: {
            type: DataTypes.DATE,
            allowNull: false
        },
        precio:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    }


const config = {
    tableName: 'carrito',
    timestamps: false
}

const Carrito = sequelize.define (alias, cols,config)

Carrito.associate = (models) =>{
//Aca hacemos las relaciones
} 

return Carrito;
}


