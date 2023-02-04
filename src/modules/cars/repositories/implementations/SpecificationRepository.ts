import { Specifications } from '../../entities/Specifications';
import { ISpecificationsRepository, ICreateSpecificationsDTO } from '../ISpecificationRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private Specifications: Specifications[]

  private static INSTANCE: SpecificationsRepository

  constructor() {
    this.Specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE){
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }

    return SpecificationsRepository.INSTANCE
  }

  create({ name, description }: ICreateSpecificationsDTO): void {
    const specification = new Specifications()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.Specifications.push(specification)
  }

  findByName(name: string): Specifications {
    const specification = this.Specifications.find(specification => specification.name === name)
    return specification
  }

  list(): Specifications[] {
   return this.Specifications
  }
}

export { SpecificationsRepository }