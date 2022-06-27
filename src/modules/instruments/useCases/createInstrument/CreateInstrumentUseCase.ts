import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { IInstrumentsRepository } from "../../repositories/IInstrumentsRepository"

interface IRequest {
  name: string
  amount: string
}

@injectable()
class CreateInstrumentUseCase {
  constructor(
    @inject("InstrumentsRepository")
    private instrumentsRepository: IInstrumentsRepository
  ) { }

  async execute({ name, amount }: IRequest): Promise<void> {

    const instrumentExists = await this.instrumentsRepository.findByName(name);

    if (instrumentExists) {
      throw new AppError('This instrument already exists!');
    }

    const book = await this.instrumentsRepository.create(name, amount);
  }
}

export { CreateInstrumentUseCase };
