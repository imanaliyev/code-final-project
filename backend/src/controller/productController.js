import { productModel } from "../model/productModel.js"

export const getAllProducts = async (req, res) => {
    try {
        const product = await productModel.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.massage)

    }
}

export const getByIdProduct = async (req, res) => {
    try {
        const { id } = req.params

        const product = await productModel.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.massage)
    }
}


export const postProduct = async (req, res) => {
    try {
        const { image, category, name, price } = req.body
        const newProduct = new productModel({ image, category, name, price })
        await newProduct.save()
        res.status(200).json('item added')
    } catch (error) {
        res.status(500).json(error.massage)
    }
}


export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params

        const product = await productModel.findByIdAndUpdate(id, req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.massage)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

        const product = await productModel.findByIdAndDelete(id)
        res.status(200).json('item deleted')
    } catch (error) {
        res.status(500).json(error.massage)
    }
}