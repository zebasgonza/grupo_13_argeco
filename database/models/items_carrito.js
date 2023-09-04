module.exports = (sequelize, DataTypes) => {
    const alias = 'producto';

    const cols = {
        id_carrito: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_producto: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    }


const config = {
    tableName: 'items_carrito',
    timestamps: false
}

const producto = sequelize.define (alias, cols,config)

//Carrito.associate = (models) =>{
//Aca hacemos las relaciones
 

return producto;
}
