const Products = require("../models/products.model");

const createProduct = async (req, res,next) => {
    try {
        const newProduct = req.body;
        await Products.create(newProduct);
        res.status(201).send();
      
        
    } catch (error) {
        next(error);
    }
}

/*Ver todos los usuarios
const getAllUsers = async (req, res, next)=>{
    try{
        const users = await Users.findAndCountAll();
        res.json(users);
    } catch(error){
        res.status(400).json(error);
    }

}

//Eliminar un usuario
const deleteUser = async (req, res, next)=>{
    try{
        const {id} = req.params;
        await Users.destroy({where:{id: id,}});
        res.send(204).send();
        
    } catch(error){
        res.sendStatus(400);
    }

}

//Login
const userLogin = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({
            where:{email}
        })
        if(!user) {
            return res.status(400).json(
                {
                    error: "Invalid email",
                    message: "email not exist"
                }
            )
        }
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return res.status(400).json({
                message: "Don`t can continue"
            });
        }

        const {firstname, lastname, username, id} = user;
        const userData = {firstname, lastname, username, id, email};
        const token = await jwt.sign(userData, "Arbelaez", {algorithm: "HS512", expiresIn: "5m"});

        userData.token = token;


        //res.json({firstname, lastname, username, id, email}); 
        res.json(userData); 
    } catch (error) {
        res.status(400).json(error);
        
    }
}*/



module.exports = {
    createProduct,
    //getAllUsers,
    //deleteUser,
    //userLogin
}