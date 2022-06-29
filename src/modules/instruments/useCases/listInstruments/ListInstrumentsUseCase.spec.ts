import "reflect-metadata";

import { InstrumentsRepositoryInMemory } from "../../repositories/in-memory/InstrumentsRepositoryInMemory";
import { CreateInstrumentUseCase } from "../createInstrument/CreateInstrumentUseCase";
import { ListInstrumentsUseCase } from "./ListInstrumentsUseCase";

let instrumentsRepositoryInMemory: InstrumentsRepositoryInMemory;
let listInstrumentsUseCase: ListInstrumentsUseCase;
let createInstrumentUseCase: CreateInstrumentUseCase;

describe("list instruments", () => {
  beforeEach(() => {
    instrumentsRepositoryInMemory = new InstrumentsRepositoryInMemory();
    listInstrumentsUseCase = new ListInstrumentsUseCase(instrumentsRepositoryInMemory);
    createInstrumentUseCase = new CreateInstrumentUseCase(instrumentsRepositoryInMemory);
  })

  it("should be able to list all instruments", async () => {
    await createInstrumentUseCase.execute({ name: 'test', amount: '100' });

    const all = await listInstrumentsUseCase.execute();

    expect(all).toHaveLength(1);
  });
});