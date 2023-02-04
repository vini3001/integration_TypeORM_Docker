import { SpecificationsRepository } from "../../cars/repositories/implementations/SpecificationRepository";


class ListSpecificationsUseCase {
    constructor(private specificationsRepository: SpecificationsRepository){}
    execute(){
        return this.specificationsRepository.list()
    }
}

export {ListSpecificationsUseCase}