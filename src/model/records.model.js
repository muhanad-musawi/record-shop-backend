//Hier erzeugen wir die Validierung vom Datenbankschema
//title artist year price cover
import mongoose from "mongoose";


const recordsSchema = new mongoose.Schema({
  title: {type:String, required: true},
  artist: {type:String},
  year: {type:String},
  price: {type:String},
  cover: {type:String}
})

const Records = mongoose.model('Records',recordsSchema, "record-shop")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default Records