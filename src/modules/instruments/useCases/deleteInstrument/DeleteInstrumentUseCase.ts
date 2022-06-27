import { inject, injectable } from "tsyringe"
import { IInstrumentsRepository } from "../../repositories/IInstrumentsRepository"

@injectable()
class DeleteInstrumentUseCase {
  constructor(
    @inject("InstrumentsRepository")
    private instrumentsRepository: IInstrumentsRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.instrumentsRepository.delete(id);
  }
}

export { DeleteInstrumentUseCase };
