import { Low, JSONFile } from 'lowdb'  
const db = new Low(new JSONFile('logs.json'))
await db.read()
db.data ||= { records: [
        
    ],
};  
await db.write() 

export default db 