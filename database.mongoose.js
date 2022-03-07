import { faker } from '@faker-js/faker'; 
import Records from './src/model/records.model.js'  
import Users from './src/model/users.model.js' 
import moment from 'moment'


export  async function seedTestData() { 
  
  await Records.deleteMany({}) 

  await Users.deleteMany({})

for (let i= 0; i < 10; i++) {
  
  const record =  new Records({ 
   
    title: faker.name.firstName(),
    artist: faker.name.firstName(), 
    year: moment(faker.date.past()).format('YYYY'),  
    price: faker.commerce.price(), 
    cover: faker.image.animals(),

  })   
  await record.save() 


} 


for (let i= 0; i < 10; i++) {
  
  const users =  new Users({ 
   
    firstName: faker.name.firstName(),
    lastName: faker.name.firstName(),  
    email: faker.name.firstName(),  
    password: faker.name.firstName(), 

  })   
  await users.save() 

  
}
 
}  

