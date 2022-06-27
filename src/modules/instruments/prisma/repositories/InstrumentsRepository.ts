import { v4 as uuidV4 } from "uuid";
import { prisma } from "../../../../database/prismaClient";
import { IInstrumentsRepository } from "../../repositories/IInstrumentsRepository";
import { Instrument } from "../entities/Instrument";

class InstrumentsRepository implements IInstrumentsRepository {
  async list(): Promise<Instrument[]> {
    const all = await prisma.instruments.findMany();
    return all;
  }

  async create(name: string, amount: string): Promise<void> {
    await prisma.instruments.create({
      data: {
        id: uuidV4(),
        name,
        amount
      }
    })
  }

  update(name: string, amount: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findByName(name: string): Promise<Instrument | null> {
    const instrument = await prisma.instruments.findFirst({
      where: {
        name
      }
    })

    return instrument;
  }
}

export { InstrumentsRepository };
