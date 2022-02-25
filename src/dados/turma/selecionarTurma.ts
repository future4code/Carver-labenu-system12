import { connection } from "../../connection"

export const selecionarTurma = async (id?: string): Promise<any> => {
  let resultado
  if (id) {
    resultado = await connection("turma").where("id", id)
  } else {
    resultado = await connection("turma")
  }

  return resultado
}