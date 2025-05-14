const data = require("../data")
const products = data.products

exports.getAllProducts = (req, res) => {
    res.json(products)
}


exports.getProductById = (req, res) => {
    const { id } = req.params
    res.json(products.find(product => product.id == parseInt(id)))
}


exports.searchProductByQuery = (req, res) => {
    const { keyword, minPrice } = req.query
    if (!keyword || !minPrice)
        return res.status(400).json({ error: "Missing search terms 'keyword or minPrice'" });

    const result = products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    res.send(result[0])
}

exports.addNewProduct = (req, res) => {
    const { id, name, price, categoryId } = req.body
    const product = { id, name, price, categoryId }
    products.push(product)
    res.status(201).json(product)
}

exports.replaceProductById = (req, res) => {
    const { id } = req.params
    const { name, price, categoryId } = req.body
    const product = products.find(product => product.id == parseInt(id))
    if (!product)
        res.status(404).json({ error: "Product not found" })
    product.name = name
    product.price = price
    product.categoryId = categoryId
    res.status(200).json(product)
}

exports.updatePartOfProduct = (req, res) => {
    const { id } = req.params
    const { price } = req.body
    const product = products.find(product => product.id == parseInt(id))
    if (!product)
        res.status(404).json({ error: "Product not found" })
    product.price = price
    res.status(200).json(product)
}

exports.removeProduct = (req, res) => {
    const { id } = req.params
    const product = products.find(product => product.id == parseInt(id))
    if (!product)
        res.status(404).json({ error: "Product not found" })
    else
        products.splice(product, 1)
    res.status(200).json(products)
}