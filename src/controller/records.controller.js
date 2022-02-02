
import db from '../../database.js'

// Controller Methods 


export  function  allRecords(req,res) {
  const records = db.data.records;  
  res.send(records)
}  
 
export  async function  newRecords (req,res){   
  const data = req.body 

  if (!data.title || !data.artist || !data.year || !data.price || !data.cover) {
    return res.status(406).send('Either Title Artis or Year or Price is missing')
  } else{
    db.data.records.push( {
      title: data.title,
      artist: data.artist, 
      year: data.year,  
      price: data.price, 
      cover: data.cover, //Bildlink als Blobstorage oder relativer Pfad 
    }); 
    await db.write(); 
  
    res.status(201).send('There was a new record added with the '+ data.title +'title.')
  }

  

}