
import Users from '../model/users.model.js' 
import bcrypt from 'bcrypt'


 export  async function getUsers( req, res) {
  
 const allUsers = await Users.find({}) 
 
 if (!allUsers) {
   return res.status(400).send('not find users')
 }
 
  res.json(allUsers)

} 


