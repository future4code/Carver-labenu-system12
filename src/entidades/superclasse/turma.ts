export class Turma {
  private id: string = Math.floor(Date.now() * Math.random()).toString(36)
  private nome: string
  private modulo: string = "0"

  constructor (nome: string){
    this.nome = nome
  }

  getId(): string {
    return this.id
  }

  getNome(): string {
    return this.nome
  }

  getModulo(): string {
    return this.modulo
  }
}