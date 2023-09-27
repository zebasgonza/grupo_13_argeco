module.exports = (sequelize, DataTypes) => {
    const alias = 'Stock';

    const cols = {
        id_producto: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        descripcion:{
            type: DataTypes.STRING,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        precio:{
            type: DataTypes.DECIMAL,
            allowNull: true
        },
    }


const config = {
    tableName: 'stock',
    timestamps: false
}

const stock = sequelize.define (alias, cols,config)

/* stock.associate = (models) =>{
//Aca hacemos las relaciones
//relación de uno a muchos, el stock puede tener varios productos en la tabla items_carrito
    stock.hasMany(models.items_carrito, {
        as: 'items_carrito',
        foreignKey: 'id_producto'
    });
 }*/ 

return stock;
}