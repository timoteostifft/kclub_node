import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListInstrumentsUseCase } from "./ListInstrumentsUseCase";

class ListInstrumentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listInstrumentsUseCase = container.resolve(ListInstrumentsUseCase);

    const all = await listInstrumentsUseCase.execute();

    return response.json(all);
  }
}

export { ListInstrumentsController };
