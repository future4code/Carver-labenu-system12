import { connection } from "../../connection";

export const selecionarEspecialidade = async (id: string): Promise<any[]> => {

  const resultado = await connection("docente_especialidade")
    .select("nome")
    .join("especialidade", "especialidade.id", "docente_especialidade.especialidade_id")
    .where("docente_id", id)

  return resultado
}