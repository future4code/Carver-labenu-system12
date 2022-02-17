export class Docentes {
  private id: string = (65 + Math.floor(Math.random() * 26).toString())
  private nome: string
  private email: string
  private dataNasc: string
  private turmaID: string = "sem alocação"

  constructor(nome: string, email: string, dataNasc: string) {
    this.nome = nome
    this.email = email
    this.dataNasc = dataNasc
  } 

  getId(){
    return this.id
  }

  getNome(){
    return this.nome
  }

  getEmail(){
    return this.email
  }

  getDataNasc(){
    return this.dataNasc
  }

  getTurmaId(){
    return this.turmaID
  }
}