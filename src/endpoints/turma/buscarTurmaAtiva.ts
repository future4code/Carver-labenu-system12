import { Request, Response } from "express"
import { connection } from "../../connection"
import { selecionarDocentes } from "../../dados/docentes/selecionarDocentes"

export const buscarTurmaAtiva = async (req: Request, res: Response): Promise<void> => {

  const consulta = await connection("turma")
  
  //adicionar depois docentes e alunos nas turmas
  // const docentes = await selecionarDocentes()

  const filtraModulo = consulta.filter((turma) =>{
    if(turma.modulo !== "0"){
      return turma
    }
  })

  res.status(201).send(filtraModulo)
}