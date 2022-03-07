import {Router} from 'express';  
import { getUsers } from '../controller/users.controller.js';

const router = new Router();  

router.route('/users')
.get(getUsers) 



export default router