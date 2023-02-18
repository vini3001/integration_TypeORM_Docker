import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  async execute({ description, name }: IRequest): Promise<void> {
    const categoriesAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoriesAlreadyExists) {
      throw new Error("Category already exists!");
    }

    const verify = this.categoriesRepository.create({ name, description });
    console.log(verify)
  }
}

export { CreateCategoryUseCase };
