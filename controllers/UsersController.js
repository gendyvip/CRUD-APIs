const data = require("../data")
const users = data.users

exports.getAllUsers = (req, res) => {
    res.json(users)
}


exports.getUserById = (req, res) => {
    const { id } = req.params
    res.json(users.find(user => user.id == parseInt(id)))
}

exports.addNewUser = (req,res)=>{
    const {id,name,email} = req.body
    const user = {id,name,email}
    users.push(user)
    res.status(201).json(user)
}

exports.replaceUserById=(req,res)=>{
    const {id} = req.params
    const {name,email}=req.body
    const user= users.find(user=>user.id==parseInt(id))
    if(!user)
        res.status(404).json({error: "User not found"})
    user.name=name
    user.email=email
    res.status(200).json(user)
}

exports.deleteUser=(req,res)=>{
    const {id}=req.params
    const user= users.find(user=>user.id==parseInt(id))
    if(!user)
        res.status(404).json({error: "User not found"})
    else
        users.splice(user,1)
    res.status(200).json(users)
}