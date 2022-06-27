import { Router } from "express";

import { ListInstrumentsController } from "../../../modules/instruments/useCases/listInstruments/ListInstrumentsController";

const instrumentsRoutes = Router();

const listInstrumentsController = new ListInstrumentsController();

instrumentsRoutes.get("/", listInstrumentsController.handle);

export { instrumentsRoutes };
