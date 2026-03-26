import { Router } from "express";
import ingredientController from '../controles/ingredientes.js';

const ingredientsRouter = Router();

ingredientsRouter.post('/', ingredientController.create)
ingredientsRouter.get('/', ingredientController.readAll)
ingredientsRouter.get('/:id', ingredientController.read)
ingredientsRouter.put('/:id', ingredientController.update)
ingredientsRouter.delete('/:id', ingredientController.delete)

export default ingredientsRouter;
