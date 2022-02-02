import {Router} from 'express';  
import { 
  userMas
} from '../controller/users.controller.js'  

const router = new Router();  

router.route('/users')
.get(userMas) 



export default router