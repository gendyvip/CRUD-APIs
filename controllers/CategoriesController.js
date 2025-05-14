const data = require("../data")
const categories = data.categories

exports.getAllCategories = (req, res) => {
    res.json(categories)
}


exports.getCategoryById = (req, res) => {
    const { id } = req.params
    res.json(categories.find(category => category.id == parseInt(id)))
}


exports.addNewCategory = (req,res)=>{
    const {id,name} = req.body
    const category = {id,name}
    categories.push(category)
    res.status(201).json(category)
}
