module.exports = (sequelize, DataTypes) => {
    const alias = 'FichaTenica';

    const cols = {
        id_ficha_tecnica: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_producto: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        ancho: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        alto: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        garantia: {
            type: DataTypes.VARCHAR,
            allowNull: false
        },
    }


    const config = {
        tableName: 'carrito',
        timestamps: false
    }

    const Carrito = sequelize.define(alias, cols, config)

    Carrito.associate = (models) => {

        Carrito.belongsToMany(models.items_carrito, {
            as: 'Carrito',
            timestamps: false,
            foreignKey: 'id_carrito'
        });

    }

    return Carrito;
}


