import { Request, Response } from "express"
import { Docentes } from "../../entidades/subclasse/docentes"
import { connection } from "../../connection"

export const criarDocente = async (req: Request, res: Response): Promise<void> => {
  let codigoErro = 400
  try {
    const docente = new Docentes(req.body.nome, req.body.email, req.body.dataNasc, req.body.especialidade)

    let especialidade
    let idEspecialidade
    const id = (65 + Math.floor(Math.random() * 26).toString())


    for (let i = 0; i < docente.pegarEspecialidade().length; i++) {
      if (docente.pegarEspecialidade()[i].toUpperCase() === req.body.especialidade.toUpperCase()) {
        especialidade = req.body.especialidade
        idEspecialidade = docente.pegarEspecialidade().findIndex(i => i === req.body.especialidade) + 1
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

    if (!docente.transformarDataNasc(req.body.dataNasc)){
      codigoErro = 422
      throw new Error("Informe uma data de nascimento válida")
    }

    const novoDocente = await connection("docente")
      .insert({
        id: docente.pegarId(),
        nome: docente.pegarNome(),
        email: docente.pegarEmail(),
        data_nasc: docente.transformarDataNasc(req.body.dataNasc),
        turma_id: docente.pegarTurmaId()
      })

    const especialidadeDocente = await connection("docente_especialidade")
      .insert({
        id: id,
        docente_id: docente.pegarId(),
        especialidade_id: idEspecialidade
      })

    res.status(201).send("Docente cadastrado")

  } catch (error: any) {
    res.status(codigoErro).send(error.message || error.sqlMessage)
  }
}