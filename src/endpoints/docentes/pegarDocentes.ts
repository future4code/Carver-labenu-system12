import { Request, Response } from "express";
import { selecionarDocentes } from "../../dados/docentes/selecionarDocentes";

export const pegarDocentes = async (req: Request, res: Response): Promise<void> => {
  try {
    const docentes = await selecionarDocentes()

    res.status(201).send(docentes)

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}