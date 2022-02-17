import { connection } from "../../connection";

export const selecionarEspecialidade = async (id: string):Promise<any[]> => {

  const result = await connection("docente_especialidade")
    .select("nome")
    .join("especialidade", "especialidade.id", "docente_especialidade.especialidade_id")
    .where("docente_id", id)
    
  return result
}