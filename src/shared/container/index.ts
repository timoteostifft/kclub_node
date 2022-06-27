import { container } from "tsyringe";

import { InstrumentsRepository } from "../../modules/instruments/prisma/repositories/InstrumentsRepository";
import { IInstrumentsRepository } from "../../modules/instruments/repositories/IInstrumentsRepository";

container.registerSingleton<IInstrumentsRepository>(
  "InstrumentsRepository",
  InstrumentsRepository
);
