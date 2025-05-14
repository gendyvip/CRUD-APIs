const data = require("../data")
const carts = data.cart


exports.getCartItemsById = (req, res) => {
    const { userId } = req.params
    const cart = carts.find(cart => cart.userId == parseInt(userId))
    res.json(cart)
}



exports.addProductById = (req, res) => {
    const { userId } = req.params
    const [{ productId, quantity }] = req.body.items
    const cart = carts.find(cart => cart.userId == parseInt(userId))
    const newProduct = { productId, quantity }
    cart.items.push(newProduct)
    res.status(201).json(cart)
}

exports.updateQuantity = (req, res) => {
    const { userId, productId } = req.params
    const cart = carts.find(cart => cart.userId == parseInt(userId))
    const updatedProduct = cart.items.find(product => product.productId == parseInt(productId))
    if (!updatedProduct)
        res.status(404).json({ error: "Product not found" })
    else 
        updatedProduct.quantity = req.body.quantity
    res.status(200).json(cart)
}

exports.removeItem = (req, res) => {
    const { userId, productId } = req.params
    const cart = carts.find(cart => cart.userId == parseInt(userId))
    const deletedProduct = cart.items.find(product => product.productId == parseInt(productId))
    if (!deletedProduct)
        res.status(404).json({ error: "Product not found" })
    else
        cart.items.splice(deletedProduct,1)
    res.status(200).json(cart)
}

exports.clearItems = (req, res) => {
    const { userId } = req.params
    const cart = carts.find(cart => cart.userId == parseInt(userId))
    if (!cart)
        res.status(404).json({ error: "Product not found" })
    else
        cart.items.splice(0,cart.items.length)
    res.status(200).json(cart)
}