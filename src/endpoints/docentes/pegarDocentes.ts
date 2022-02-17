import { Request, Response } from "express";
import { selecionarDocentes } from "../../dados/docentes/selecionarDocentes";
import { selecionarEspecialidade } from "../../dados/docentes/selecionarEspecialidade";

export const pegarDocentes = async (req: Request, res: Response): Promise<void> => {
  try {
    const docentes = await selecionarDocentes()

    for(let i = 0; i < docentes.length; i++){
      docentes[i].especialidade = await selecionarEspecialidade(docentes[i].id)
    }

    res.status(201).send(docentes)

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}