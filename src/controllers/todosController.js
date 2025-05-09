import * as service from '../services/todosService.js';

export async function listTodos(req, res, next) {
  try {
    const todos = await service.getAllTodos();
    res.json(todos);
  } catch (err) { next(err); }
}

export async function addTodo(req, res, next) {
  try {
    const todo = await service.createTodo(req.body);
    res.status(201).json(todo);
  } catch (err) { next(err); }
}

export async function editTodo(req, res, next) {
  try {
    const todo = await service.updateTodo(req.params.id, req.body);
    res.json(todo);
  } catch (err) { next(err); }
}

export async function removeTodo(req, res, next) {
  try {
    await service.deleteTodo(req.params.id);
    res.status(204).end();
  } catch (err) { next(err); }
}