import {Router} from 'express'; 
import { 
  allRecords, 
  newRecords,
  deleteRecord
} from '../controller/records.controller.js' 

const router = new Router();  

router.route('/all').get(allRecords);
// localhost:4000/records/all -> Endpunkt
router.route('/new').post(newRecords)
  

router.route('/:id').delete(deleteRecord);  
//router.get('/records/top10', () => { });

export default router;