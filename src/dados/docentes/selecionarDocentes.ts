import { connection } from "../../connection";

export const selecionarDocentes = async (id?: string): Promise<any[]> => {
  let resultado

  if (id) {
    resultado = await connection("docente").where("id", id)
  } else {
    resultado = await connection("docente")
  }

  return resultado
}

