import { SpecificationsRepository } from "../../cars/repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";


const specificationRepository = null
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationRepository)
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase)

export {listSpecificationsController}