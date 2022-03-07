
import mongoose from "mongoose";


const usersSchema = new mongoose.Schema({
  firstName: {type:String, required: true},
  lastName: {type:String, required: true},
  email: {type:String},
  password: {type:String}
 
}, {
  timestamps: true,
  versionKey: false,
}); 



const Users = mongoose.model('Users',usersSchema, "users")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default Users