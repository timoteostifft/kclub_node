import { IUpdateInstrumentDTO } from "../dtos/IUpdateInstrumentDTO";
import { Instrument } from "../prisma/entities/Instrument";

interface IInstrumentsRepository {
  list(): Promise<Instrument[]>;
  create(name: string, amount: string): Promise<void>;
  update({ id, data }: IUpdateInstrumentDTO): Promise<Instrument | null>;
  delete(id: string): Promise<void>;
  findByName(name: string): Promise<Instrument | null>;
  findById(id: string): Promise<Instrument | null>;
}

export { IInstrumentsRepository };
