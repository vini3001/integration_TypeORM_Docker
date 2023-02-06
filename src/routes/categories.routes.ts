import { Request, Response, Router } from "express";
import  createCategoryController  from "../modules/usecases/createCategory";
import { listCategoriesController } from "../modules/usecases/listCategories";
import multer from "multer";
import { importCategoryController } from "../modules/usecases/importCategory";

const categoriesRoutes = Router()
const upload = multer({
    dest: "./tmp"
})

categoriesRoutes.post("/", (req: Request, res: Response) => {
return createCategoryController().handle(req, res)
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
 return listCategoriesController.handle(req, res)
});

categoriesRoutes.post("/import", upload.single("file"),(req: Request, res: Response) => {
   return importCategoryController.handle(req, res)
})
export { categoriesRoutes };
