export class Turma {
  private id: string = (65 + Math.floor(Math.random() * 26).toString())
  private nome: string
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

  getModulo(){
    return this.modulo
  }

}