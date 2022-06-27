import { Router } from "express";

import { CreateInstrumentController } from "../../../modules/instruments/useCases/createInstrument/CreateInstrumentController";
import { DeleteInstrumentController } from "../../../modules/instruments/useCases/deleteInstrument/DeleteInstrumentController";
import { ListInstrumentsController } from "../../../modules/instruments/useCases/listInstruments/ListInstrumentsController";
import { UpdateInstrumentController } from "../../../modules/instruments/useCases/updateInstrument/UpdateInstrumentController";

const instrumentsRoutes = Router();

const listInstrumentsController = new ListInstrumentsController();
const createInstrumentController = new CreateInstrumentController();
const deleteInstrumentController = new DeleteInstrumentController();
const updateInstrumentController = new UpdateInstrumentController();

instrumentsRoutes.get("/", listInstrumentsController.handle);
instrumentsRoutes.post("/", createInstrumentController.handle);
instrumentsRoutes.delete("/:id", deleteInstrumentController.handle);
instrumentsRoutes.patch("/:id", updateInstrumentController.handle);

export { instrumentsRoutes };
