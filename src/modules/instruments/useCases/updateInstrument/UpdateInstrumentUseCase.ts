import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Instrument } from "../../prisma/entities/Instrument";
import { IInstrumentsRepository } from "../../repositories/IInstrumentsRepository";

interface IRequest {
  id: string,
  data: {
    name: string;
    amount: string;
  }
}

@injectable()
class UpdateInstrumentUseCase {
  constructor(
    @inject("InstrumentsRepository")
    private instrumentsRepository: IInstrumentsRepository
  ) { }

  async execute({ id, data }: IRequest): Promise<Instrument> {
    const instrumentExists = await this.instrumentsRepository.findById(id)

    if (!instrumentExists) {
      throw new AppError("Instrument does not exists!")
    }

    const instrument = await this.instrumentsRepository.update({ id, data })

    return instrument;
  }
}

export { UpdateInstrumentUseCase }