import { connection } from "../../connection";

export const selecionarDocentes = async (id?:string): Promise<any[]> => {
  let result

  if(id){
    result = await connection("docente").where("id", id)
  } else {
    result = await connection("docente")
  }

  return result
}

