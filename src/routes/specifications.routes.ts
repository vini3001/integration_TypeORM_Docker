import { Router } from "express";
import { Request, Response } from "express";
import { createCategoryController } from "../modules/usecases/createCategory";
import { listCategoriesController } from "../modules/usecases/listCategories";

const specificationsRoutes = Router()

specificationsRoutes.post("/", (req: Request, res: Response) => {
  createCategoryController.handle(req, res)
})

specificationsRoutes.get("/", (req: Request, res: Response) => {
  listCategoriesController.handle(req, res)
})

export { specificationsRoutes }