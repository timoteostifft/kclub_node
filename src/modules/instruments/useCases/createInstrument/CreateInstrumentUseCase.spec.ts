import "reflect-metadata";
import { AppError } from "../../../../shared/errors/AppError";

import { InstrumentsRepositoryInMemory } from "../../repositories/in-memory/InstrumentsRepositoryInMemory";
import { CreateInstrumentUseCase } from "./CreateInstrumentUseCase";

let instrumentsRepositoryInMemory: InstrumentsRepositoryInMemory;
let createInstrumentUseCase: CreateInstrumentUseCase;

describe("create instrument", () => {
  beforeEach(() => {
    instrumentsRepositoryInMemory = new InstrumentsRepositoryInMemory();
    createInstrumentUseCase = new CreateInstrumentUseCase(instrumentsRepositoryInMemory);
  });

  it("should be able to create a new instrument", async () => {
    await createInstrumentUseCase.execute({ name: 'test', amount: '100' });

    const instrument = await instrumentsRepositoryInMemory.findByName('test');

    expect(instrument).toHaveProperty('id');
  });

  it("should not be able to create a instrument already exists", async () => {
    expect(async () => {
      await createInstrumentUseCase.execute({ name: 'test', amount: '100' });

      await createInstrumentUseCase.execute({ name: 'test', amount: '100' });
    }).rejects.toBeInstanceOf(AppError);
  });
})