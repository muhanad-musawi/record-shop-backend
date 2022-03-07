//import db from '../../database.js' 

import Records from '../model/records.model.js'

// Endpunkt localhost:4000/records/all
export  function  allRecords(req,res) {
  //Records ist unser Model aus MongoDB, welches wir in Mongoose erstellen
  //Mit der FIND Methode suchen wir in der record-shop Collection
  //Die Rückgabe vom FIND gibt dir entweder Fehler zurück (err) ODER ein Erfolgsparameter(records)
  Records.find({}, (err,records)=>{
    console.log("Hallo hier bin ich");
    if(err){
      res.status(401).send(err);
    } else {
      res.status(200).send(records)
    }
  }) 
}  
 
export  async function  newRecords (req,res){   
  const data = req.body 

  if (!data.title || !data.artist || !data.year || !data.price || !data.cover) {
    return res.status(406).send('Either Title Artis or Year or Price is missing')
  } else{

 const record =  new Records({ 
   
      title: data.title,
      artist: data.artist, 
      year: data.year,  
      price: data.price, 
      cover: data.cover,

    }) 

    await record.save()
  
    res.status(201).send('There was a new record added with the '+ data.title +'title.')
  }
} 


export  async function  getRecordById (req,res){   
  const id = req.params.id
}
  
export  async function  deleteRecord(req,res) { 

  const id = req.params.id
console.log('Id',id);
  const record = await  Records.deleteOne({ _id: id})
if (record.deletedCount === 0) {
  res.status(404).send( `Id ${id} not found`)
}else{
  res.status(200).json(record)
}
}

