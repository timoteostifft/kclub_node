import "reflect-metadata";

import { InstrumentsRepositoryInMemory } from "../../repositories/in-memory/InstrumentsRepositoryInMemory";
import { CreateInstrumentUseCase } from "../createInstrument/CreateInstrumentUseCase";
import { UpdateInstrumentUseCase } from "./UpdateInstrumentUseCase";

let instrumentsRepositoryInMemory: InstrumentsRepositoryInMemory;
let createInstrumentUseCase: CreateInstrumentUseCase;
let updateInstrumentUseCase: UpdateInstrumentUseCase;

describe("update instrument", () => {
  beforeEach(() => {
    instrumentsRepositoryInMemory = new InstrumentsRepositoryInMemory();
    createInstrumentUseCase = new CreateInstrumentUseCase(instrumentsRepositoryInMemory);
    updateInstrumentUseCase = new UpdateInstrumentUseCase(instrumentsRepositoryInMemory);
  });

  it("should be able to update a existing instrument", async () => {
    await createInstrumentUseCase.execute({ name: 'test', amount: '100' });

    const instrument = await instrumentsRepositoryInMemory.findByName('test');

    if (instrument) {
      const updated = await updateInstrumentUseCase.execute({ id: instrument.id, data: { name: 'updated', amount: '200' } });
      expect(updated?.name).toEqual('updated');
    }

  });
})