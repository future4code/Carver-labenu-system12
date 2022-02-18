import { selecionarTurma } from "../../dados/turma/selecionarTurma"
import { Pessoas } from "../superclasse/pessoa"

export class Docentes extends Pessoas {
  
  private especialidade: string[] = ["JS", "CSS", "React","Typescript","POO"]
  
  constructor(nome: string, email: string, dataNasc: string, especialidade: string) {
    super(nome, email, dataNasc)
    especialidade = especialidade
  } 

  pegarEspecialidade(): string[]{
    return this.especialidade
  }

  
}

