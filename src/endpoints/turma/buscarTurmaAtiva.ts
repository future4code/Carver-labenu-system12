import { Request, Response } from "express"
import { selecionarTurma } from "../../dados/turma/selecionarTurma"

export const buscarTurmaAtiva = async (req: Request, res: Response): Promise<void> => {

  const turma = await selecionarTurma()

  let resultado: string[] = []

  for (let i = 0; i < turma.length; i++) {
    if (turma[i].modulo !== "0") {
      resultado.push(turma[i])
    }
  }

  res.status(201).send({ resultado })
}