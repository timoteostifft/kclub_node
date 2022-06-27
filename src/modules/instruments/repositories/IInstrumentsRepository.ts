import { Instrument } from "../prisma/entities/Instrument";

interface IInstrumentsRepository {
  list(): Promise<Instrument[]>;
  create(name: string, amount: string): Promise<void>;
  update(name: string, amount: string): Promise<void>;
  delete(id: string): Promise<void>;
  findByName(name: string): Promise<Instrument | null>;
  findById(id: string): Promise<Instrument | null>;
}

export { IInstrumentsRepository };
