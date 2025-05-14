const express = require("express")
const morgan = require('morgan')
require('dotenv').config()
const productController = require('./controllers/ProductsController')
const categoryController = require('./controllers/CategoriesController')
const usersController = require('./controllers/UsersController')
const cartController = require('./controllers/CartController')

const PORT = process.env.PORT

const app = express()
app.use(morgan(":method :url :response-time"))
app.use(express.json())


app.get('/api/products', productController.getAllProducts)
app.get('/api/products/search', productController.searchProductByQuery)
app.get('/api/products/:id', productController.getProductById)
app.post('/api/products', productController.addNewProduct)
app.put('/api/products/:id', productController.replaceProductById)
app.patch('/api/products/:id', productController.updatePartOfProduct)
app.delete('/api/products/:id', productController.removeProduct)


app.get('/api/categories', categoryController.getAllCategories)
app.get('/api/categories/:id', categoryController.getCategoryById)
app.post('/api/categories', categoryController.addNewCategory)


app.get('/api/users', usersController.getAllUsers)
app.get('/api/users/:id', usersController.getUserById)
app.post('/api/users', usersController.addNewUser)
app.put('/api/users/:id', usersController.replaceUserById)
app.delete('/api/users/:id', usersController.deleteUser)

app.get('/api/cart/:userId', cartController.getCartItemsById)
app.post('/api/cart/:userId/items', cartController.addProductById)
app.patch('/api/cart/:userId/items/:productId', cartController.updateQuantity)
app.delete('/api/cart/:userId/items/:productId', cartController.removeItem)
app.delete('/api/cart/:userId', cartController.clearItems)


app.listen(PORT, () => {
    console.log("listening to port", PORT)
})