import { connection } from "../../connection";

export const selecionarDocentes = async (): Promise<any[]> => {

  const result = await connection("docente")

  return result
}

