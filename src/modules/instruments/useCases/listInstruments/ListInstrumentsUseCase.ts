import { inject, injectable } from "tsyringe";

import { Instrument } from "../../prisma/entities/Instrument";
import { IInstrumentsRepository } from "../../repositories/IInstrumentsRepository";

@injectable()
class ListInstrumentsUseCase {
  constructor(
    @inject("InstrumentsRepository")
    private instrumentsRepository: IInstrumentsRepository
  ) { }

  async execute(): Promise<Instrument[]> {
    const all = await this.instrumentsRepository.list();
    return all;
  }
}

export { ListInstrumentsUseCase };
