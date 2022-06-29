import "reflect-metadata";
import { AppError } from "../../../../shared/errors/AppError";

import { InstrumentsRepositoryInMemory } from "../../repositories/in-memory/InstrumentsRepositoryInMemory";
import { CreateInstrumentUseCase } from "../createInstrument/CreateInstrumentUseCase";
import { ListInstrumentsUseCase } from "../listInstruments/ListInstrumentsUseCase";
import { DeleteInstrumentUseCase } from "./DeleteInstrumentUseCase";

let instrumentsRepositoryInMemory: InstrumentsRepositoryInMemory;
let listInstrumentsUseCase: ListInstrumentsUseCase;
let createInstrumentUseCase: CreateInstrumentUseCase;
let deleteInstrumentUseCase: DeleteInstrumentUseCase;

describe("delete instrument", () => {
  beforeEach(() => {
    instrumentsRepositoryInMemory = new InstrumentsRepositoryInMemory();
    listInstrumentsUseCase = new ListInstrumentsUseCase(instrumentsRepositoryInMemory);
    createInstrumentUseCase = new CreateInstrumentUseCase(instrumentsRepositoryInMemory);
    deleteInstrumentUseCase = new DeleteInstrumentUseCase(instrumentsRepositoryInMemory);
  });

  it("should be able to delete instrument", async () => {
    await createInstrumentUseCase.execute({ name: 'test', amount: '100' });

    const instrument = await instrumentsRepositoryInMemory.findByName('test');

    if (instrument) {
      await deleteInstrumentUseCase.execute(instrument.id);
    }

    const all = await listInstrumentsUseCase.execute();

    console.log(all);

    expect(all).toHaveLength(0);
  });
})