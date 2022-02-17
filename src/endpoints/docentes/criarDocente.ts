import { Request, Response } from "express";
import { Docentes } from "../../classes/docentes";
import { connection } from "../../connection";

export const criarDocente = async (req: Request, res: Response): Promise<void> => {
  let codigoErro = 400
  try {
    const docente = new Docentes(req.body.nome, req.body.email, req.body.dataNasc)

    const resultado = await connection("docente")
      .insert({
        id: docente.getId(),
        nome: docente.getNome(),
        email: docente.getEmail(),
        data_nasc: docente.getDataNasc(),
        turma_id: docente.getTurmaId()
      })

    res.status(201).send("Docente cadastrado")
    
  } catch (error: any) {
    res.status(codigoErro).send(error.message || error.sqlMessage)
  }
}