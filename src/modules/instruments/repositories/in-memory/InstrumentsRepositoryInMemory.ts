import { IUpdateInstrumentDTO } from "../../dtos/IUpdateInstrumentDTO";
import { Instrument } from "../../prisma/entities/Instrument"
import { IInstrumentsRepository } from "../IInstrumentsRepository";

class InstrumentsRepositoryInMemory implements IInstrumentsRepository {

  instruments: Instrument[] = [];

  async list(): Promise<Instrument[]> {
    return this.instruments;
  }

  async create(name: string, amount: string): Promise<void> {
    const instrument = new Instrument();

    Object.assign(instrument, {
      name,
      amount
    });

    this.instruments.push(instrument);
  }

  async update({ id, data }: IUpdateInstrumentDTO): Promise<Instrument | null> {
    const { name, amount } = data;

    for (const instrument of this.instruments) {
      if (instrument.id === id) {
        Object.assign(instrument, {
          name,
          amount
        })
        return instrument;
      }
    }
    return null;
  }

  async delete(id: string): Promise<void> {
    this.instruments = this.instruments.filter(instrument => instrument.id != id);
  }

  async findByName(name: string): Promise<Instrument | null> {
    return this.instruments.find((instrument) => instrument.name === name) || null;
  }

  async findById(id: string): Promise<Instrument | null> {
    return this.instruments.find((instrument) => instrument.id === id) || null;
  }
}

export { InstrumentsRepositoryInMemory }