import {Router} from 'express'; 
import { 
  allRecords, 
  newRecords
} from '../controller/records.controller.js' 

const router = new Router();  

router.route('/records')
        .get(allRecords)  
        .post(newRecords);  
        

  
/*router.route('/records/:id')
        .get()  
        .post() 
        .delete();  
*/

//router.get('/records/top10', () => { });

export default router;