const user = require("../models/models")

const createuser = async (req, res) => {

    try {

        const { name, email, password } = req.body

        const newuser = await user.create({
            name,
            email,
            password
        })
        res.status(201).json({
            message: "user successfully created",
            code: 201,
            data: newuser

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
        const id = req.params.id
        const users = await user.deleteOne({name:"ammar1234"})
        if (!user) return res.status(404).json({ message: "User not found", code: 404 })

        res.status(200).json({
            code: 200,
            message: "user get fetched",
            data: users
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
