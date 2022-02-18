export class Turma {
  private id: string = (65 + Math.floor(Math.random() * 26).toString())
  private nome: string
  private docentes: string[] | undefined
  private estudantes: string[] | undefined
  private modulo: string = "0"

  constructor (nome: string){
    this.nome = nome
  }

  getId(){
    return this.id
  }

  getNome(){
    return this.nome
  }

  getDocentes(){
    return this.docentes
  }

  getEstudantes(){
    return this.estudantes
  }

  getModulo(){
    return this.modulo
  }
}