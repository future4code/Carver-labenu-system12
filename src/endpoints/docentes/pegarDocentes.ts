import { Request, Response } from "express";
import { selecionarDocentes } from "../../dados/docentes/selecionarDocentes";
import { selecionarEspecialidade } from "../../dados/docentes/selecionarEspecialidade";

export const pegarDocentes = async (req: Request, res: Response): Promise<void> => {
  try {
    const docentes = await selecionarDocentes()

    for (let i = 0; i < docentes.length; i++) {
      docentes[i].especialidade = await selecionarEspecialidade(docentes[i].id)
    }

    const mapearDocente = docentes.map((docente) => {
      return {
        id: docente.id,
        nome: docente.nome,
        email: docente.email,
        dataNasc: docente.data_nasc.toLocaleDateString("pt-BR"),
        turmaId: docente.turma_id,
        especialidade: docente.especialidade[0].nome
      }
    })

    res.status(201).send({ resultado: mapearDocente })

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}