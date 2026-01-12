const User = require("../models/userModels")

const createuser = async (req, res) => {

    try {

        const { name, email, password } = req.body
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            message: "user successfully created",
            code: 201,
            data: user

        })
    }
    catch (error) {
        console.log(error);

        res.status(404).json({
            message: "user not created",
            code: 404,
            error: error.message
        })
    }
}

const getuser = async (req, res) => {

    try {
       
        const user = await User.find()
        // if (!user) return res.status(404).json({ message: "User not found", code: 404 })

        res.status(200).json({
            code: 200,
            message: "user get fetched",
            data: user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "user not fetched",
            error: error.message
        })
    }

}




module.exports = {
    createuser,
    getuser,

}
