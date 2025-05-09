import { Router } from 'express';
import * as controller from '../controllers/todosController.js';

const router = Router();

router.get('/', controller.listTodos);
router.post('/', controller.addTodo);
router.put('/:id', controller.editTodo);
router.delete('/:id', controller.removeTodo);

export default router;