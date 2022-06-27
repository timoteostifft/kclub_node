import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateInstrumentUseCase } from './CreateInstrumentUseCase'


class CreateInstrumentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, amount } = request.body

    const createInstrumentUseCase = container.resolve(CreateInstrumentUseCase);

    await createInstrumentUseCase.execute({
      name,
      amount
    })

    return response.status(201).send();
  }
}

export { CreateInstrumentController };
