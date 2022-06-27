import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteInstrumentUseCase } from './DeleteInstrumentUseCase'


class DeleteInstrumentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteInstrumentUseCase = container.resolve(DeleteInstrumentUseCase);

    await deleteInstrumentUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeleteInstrumentController };
