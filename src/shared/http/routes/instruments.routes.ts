import { Router } from "express";
import { CreateInstrumentController } from "../../../modules/instruments/useCases/createInstrument/CreateInstrumentController";
import { DeleteInstrumentController } from "../../../modules/instruments/useCases/deleteInstrument/DeleteInstrumentController";

import { ListInstrumentsController } from "../../../modules/instruments/useCases/listInstruments/ListInstrumentsController";

const instrumentsRoutes = Router();

const listInstrumentsController = new ListInstrumentsController();
const createInstrumentController = new CreateInstrumentController();
const deleteInstrumentController = new DeleteInstrumentController();

instrumentsRoutes.get("/", listInstrumentsController.handle);
instrumentsRoutes.post("/", createInstrumentController.handle);
instrumentsRoutes.delete("/:id", deleteInstrumentController.handle);

export { instrumentsRoutes };
