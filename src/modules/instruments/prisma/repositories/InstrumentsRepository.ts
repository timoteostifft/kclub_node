import { v4 as uuidV4 } from "uuid";
import { prisma } from "../../../../database/prismaClient";
import { IUpdateInstrumentDTO } from "../../dtos/IUpdateInstrumentDTO";
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
    });
  }

  async update({ id, data }: IUpdateInstrumentDTO): Promise<Instrument> {
    const instrument = await prisma.instruments.update({
      where: {
        id,
      },
      data
    });
    return instrument;
  }

  async delete(id: string): Promise<void> {
    await prisma.instruments.delete({
      where: {
        id
      }
    });
  }

  async findByName(name: string): Promise<Instrument | null> {
    const instrument = await prisma.instruments.findFirst({
      where: {
        name
      }
    });

    return instrument;
  }

  async findById(id: string): Promise<Instrument | null> {
    const instrument = await prisma.instruments.findFirst({
      where: {
        id
      }
    });

    return instrument;
  }
}

export { InstrumentsRepository };
