export class Pessoas {
  protected id: string = (65 + Math.floor(Math.random() * 26).toString())
  protected nome: string
  protected email: string
  protected dataNasc: string
  protected turmaID: string = "1"
    

  constructor(nome: string, email: string, dataNasc: string) {
    this.nome = nome
    this.email = email
    this.dataNasc = dataNasc
  } 

  pegarId(){
    return this.id
  }

  pegarNome(){
    return this.nome
  }

  pegarEmail(){
    return this.email
  }

  pegarDataNasc(){
    return this.dataNasc
  }

  pegarTurmaId(){
    return this.turmaID
  }

  transformarDataNasc(data: string){
    const testagem = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/
    if(testagem.test(data)){
      const dataEditada = data.split("/")
    return dataEditada[2] + "-" + dataEditada[1] + "-" + dataEditada[0] as string
    } 
  }
}