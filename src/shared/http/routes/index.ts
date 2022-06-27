import { Router } from "express";

import { instrumentsRoutes } from "./instruments.routes";

const router = Router();

router.use("/instruments", instrumentsRoutes);

export { router };
