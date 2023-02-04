import { Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  
  private repository: Repository<Category>

  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = [];

  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository };
