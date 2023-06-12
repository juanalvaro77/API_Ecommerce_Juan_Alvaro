const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*1. un endpoint para crear usuarios*/

const createUser = async (req, res, next) => {
    try {
        const {username, email, password} = req.body;
        const hashed = await bcrypt.hash(password,10);
        await Users.create({username, email, password: hashed});
        res.status(201).send();
      
        
    } catch (error) {
        next(error);
        }
}

//Ver todos los usuarios
const getAllUsers = async (req, res, next)=>{
    try{
        const users = await Users.findAndCountAll();
        res.json(users);
    } catch(error){
        next(error);
    }

}

//Eliminar un usuario
const deleteUser = async (req, res, next)=>{
    try{
        const {id} = req.params;
        await Users.destroy({where:{id: id,}});
        res.send(204).send();
        
    } catch(error){
        next(error);
    }

}

//Login
const userLogin = async (req,res,next) => {
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({
            where:{email}
        })
        if(!user) {
            return next({
                status: 400,
                error: "Invalid email",
                message: "email not exist"
                });
        }
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return netx({
                status: 400,
                name: "invalid password",
                message: "Invalid password, Don`t can continue"
            });
        }

        const {firstname, lastname, username, id} = user;
        const userData = {firstname, lastname, username, id, email};
        const token = await jwt.sign(userData, "Arbelaez", {algorithm: "HS512", expiresIn: "5m"});

        userData.token = token;


        //res.json({firstname, lastname, username, id, email}); 
        res.json(userData); 
    } catch (error) {
        next(error);
        
    }
}



module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    userLogin
}
