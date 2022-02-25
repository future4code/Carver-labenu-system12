import { Request, Response } from "express"
import { connection } from "../../connection"
import { Turma } from "../../entidades/superclasse/turma"

export const criarTurma = async (req: Request, res: Response): Promise<void> => {
  let codigoErro = 400
  try {
    const turma = new Turma(req.body.nome)

    if (!req.body.nome) {
      codigoErro = 422
      throw new Error("Informe um nome para a turma")
    }

    const novaTurma = await connection("turma")
      .insert({
        id: turma.getId(),
        nome: turma.getNome(),
        modulo: turma.getModulo()
      })

    res.status(200).send("Turma criada")

  } catch (error: any) {
    res.status(codigoErro).send(error.message || error.sqlMessage)
  }
}