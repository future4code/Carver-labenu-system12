import { Request, Response } from "express"
import { connection } from "../../connection"
import { selecionarDocentes } from "../../dados/docentes/selecionarDocentes"
import { selecionarTurma } from "../../dados/turma/selecionarTurma"

export const mudarTurmaDocente = async (req: Request, res: Response): Promise<void> => {
  let codigoErro = 400
  try {
    const {id, turmaId} : {id: string, turmaId: string} = req.body
    
    const verificaDocente = await selecionarDocentes(id)

    const verificaTurma = await selecionarTurma(turmaId)
  
    if(!id || !turmaId){
      codigoErro = 422
      throw new Error("Informe todos os valores")
    }

    if(verificaDocente.length === 0 || verificaTurma.length === 0){
      throw new Error("Verifique os dados informados")
    }
  
    const mudaTurma = await connection("docente")
      .where("id", id)
      .update({turma_id: turmaId})

    res.status(201).send("Turma alterada")
    
  } catch (error: any) {
    res.status(codigoErro).send(error.message || error.sqlMessage)
  }
}