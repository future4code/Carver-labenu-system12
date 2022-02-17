import { Request, Response } from "express"
import { Docentes } from "../../classes/docentes"
import { connection } from "../../connection"

export const criarDocente = async (req: Request, res: Response): Promise<void> => {
  let codigoErro = 400
  try {
    const docente = new Docentes(req.body.nome, req.body.email, req.body.dataNasc, req.body.especialidade)

    let especialidade
    let idEspecialidade
    const id = (65 + Math.floor(Math.random() * 26).toString())

    for (let i = 0; i < docente.getEspecialidade().length; i++) {
      if (docente.getEspecialidade()[i].toUpperCase() === req.body.especialidade.toUpperCase()) {
        especialidade = req.body.especialidade
        idEspecialidade = docente.getEspecialidade().findIndex(i => i === req.body.especialidade) + 1
      }
    }

    if (especialidade === undefined) {
      codigoErro = 422
      throw new Error("Informe uma especialidade válida")
    }

    if(!req.body.nome || !req.body.email || ! req.body.dataNasc || !req.body.especialidade){
      codigoErro = 422
      throw new Error("Preencha os campos corretamente")
    }

    if (!docente.setDataNasc(req.body.dataNasc)){
      codigoErro = 422
      throw new Error("Informe uma data de nascimento válida")
    }

    const novoDocente = await connection("docente")
      .insert({
        id: docente.getId(),
        nome: docente.getNome(),
        email: docente.getEmail(),
        data_nasc: docente.setDataNasc(req.body.dataNasc),
        turma_id: docente.getTurmaId()
      })

    const especialidadeDocente = await connection("docente_especialidade")
      .insert({
        id: id,
        docente_id: docente.getId(),
        especialidade_id: idEspecialidade
      })

    res.status(201).send("Docente cadastrado")

  } catch (error: any) {
    res.status(codigoErro).send(error.message || error.sqlMessage)
  }
}