import { Request, Response } from "express"
import { connection } from "../../connection"

export const pegarTurma = async (req: Request, res: Response): Promise<void> => {

  const consulta = await connection("turma")
  let resultado = []

  for (let i = 0; i < consulta.length; i++) {
    if (consulta[i].modulo > 0) {
      resultado.push(consulta[i])
    }
  }

  res.status(201).send(resultado)
}