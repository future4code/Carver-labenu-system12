import { selecionarTurma } from "../../dados/turma/selecionarTurma"
import { Pessoas } from "../superclasse/pessoa"

export class Docentes extends Pessoas {
  
  private especialidades: string[] = ["JS", "CSS", "React","Typescript","POO"]
  private especialidade: string
  
  constructor(nome: string, email: string, dataNasc: string, especialidade: string) {
    super(nome, email, dataNasc)
    this.especialidade = especialidade
  } 

  getEspecialidades(): string[]{
    return this.especialidades
  }
}

