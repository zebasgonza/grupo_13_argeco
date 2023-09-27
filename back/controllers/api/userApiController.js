const DB = require('../../database/models');

const userController = {

    getUsers: async (req, res) => {

        try {

            const users = await DB.Usuarios.findAll({
                attributes: ['id_usuario', 'nombre', 'apellido', 'email']
            });

            const listUsers = users.map((user) => {
                return {
                    id: user.id,
                    name: user.nombre + ' ' + user.apellido,
                    email: user.email,
                    detail: `/api/users/${user.id_usuario}`
                }
            })
            
            let response = {
                count: users.length,
                users: listUsers,
            }

            return res.json(response);

        } catch (error) {
            console.error('error al consultar por usuario:', error)
        }
    },

    getUserImgById: async (req, res) => {
        try {

            const user = await DB.Usuarios.findByPk(
                req.params.id,
                {
                    attributes: ['image']
                }
            );

            if(!user){
                return res.status(404).json(
                    {
                        message: 'User not found'  
                    }
                )
            }
            
            let response = {
                userImage: `http://localhost:3000/img/users/${user.image}`
            }

            return res.json(response);

        } catch (error) {
            console.error('error al consultar por usuario:', error)
        }
    },

    getUserById: async (req, res) =>{
        try {

            const user = await DB.Usuarios.findByPk(
                req.params.id,
                {
                    attributes: ['id_usuario', 'image', 'nombre', 'apellido', 'email']
                }
            );

            user.image = `http://localhost:3000/img/users/${user.image}`;

            if(!user){
                return res.status(404).json(
                    {
                        message: 'User not found'  
                    }
                )
            }

            return res.json(user);

        } catch (error) {
            console.error('error al consultar por usuario:', error)
        }
    }


    
}

module.exports = userController;