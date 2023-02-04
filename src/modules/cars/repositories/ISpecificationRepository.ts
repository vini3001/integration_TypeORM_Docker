import { Specifications } from "../entities/Specifications"

interface ICreateSpecificationsDTO {
  name: string
  description: string
}
interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationsDTO): void
  findByName(name: string): Specifications
}

export { ICreateSpecificationsDTO, ISpecificationsRepository }