import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateInstrumentUseCase } from './UpdateInstrumentUseCase'


class UpdateInstrumentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, amount } = request.body

    const updateInstrumentUseCase = container.resolve(UpdateInstrumentUseCase);

    const instrument = await updateInstrumentUseCase.execute({
      id,
      data: {
        name,
        amount
      }
    })

    return response.status(201).json(instrument).send();
  }
}

export { UpdateInstrumentController };
