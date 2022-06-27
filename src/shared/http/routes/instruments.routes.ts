import { Router } from "express";
import { CreateInstrumentController } from "../../../modules/instruments/useCases/createInstrument/CreateInstrumentController";

import { ListInstrumentsController } from "../../../modules/instruments/useCases/listInstruments/ListInstrumentsController";

const instrumentsRoutes = Router();

const listInstrumentsController = new ListInstrumentsController();
const createInstrumentController = new CreateInstrumentController();

instrumentsRoutes.get("/", listInstrumentsController.handle);
instrumentsRoutes.post("/", createInstrumentController.handle);

export { instrumentsRoutes };
