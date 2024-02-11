import { userModel } from "../model/userModel.js"


export const getAllUsers = async (req, res) => {
    try {
        const User = await userModel.find({})
        res.status(200).json(User)
    } catch (error) {
        res.status(500).json(error.massage)

    }
}

export const getByIdUser = async (req, res) => {
    try {
        const { id } = req.params

        const User = await userModel.findById(id)
        const decoded = req.decoded
        if (decoded.username !== User.username && decoded.role === "user")  {
            return res.send("you dont have accsess")
            
        }
        res.status(200).json(User)
    } catch (error) {
        res.status(500).json(error.massage)
    }
}


export const postUser = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const newUser = new userModel({ username, password, email })
        await newUser.save()
        res.status(200).json('item added')
    } catch (error) {
        res.status(500).json(error.massage)
    }
}


export const updateUser = async (req, res) => {
    try {
        const { id } = req.params

        const User = await userModel.findByIdAndUpdate(id, req.body)
        res.status(200).json(User)
    } catch (error) {
        res.status(500).json(error.massage)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const User = await userModel.findByIdAndDelete(id)
        res.status(200).json('item deleted')
    } catch (error) {
        res.status(500).json(error.massage)
    }
}