import { prisma } from "../../../../database/prismaClient";
import { IInstrumentsRepository } from "../../repositories/IInstrumentsRepository";
import { Instrument } from "../entities/Instrument";

class InstrumentsRepository implements IInstrumentsRepository {
  async list(): Promise<Instrument[]> {
    const all = await prisma.instruments.findMany();
    return all;
  }
  create(name: string, amount: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(name: string, amount: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<Instrument | null> {
    throw new Error("Method not implemented.");
  }
}

export { InstrumentsRepository };
