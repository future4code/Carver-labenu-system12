export class Docentes {
  private id: string = (65 + Math.floor(Math.random() * 26).toString())
  private nome: string
  private email: string
  private dataNasc: string
  private turmaID: string = "1"
  private especialidade: string[] = ["JS", "CSS", "React","Typescript","POO"]
  

  constructor(nome: string, email: string, dataNasc: string, especialidade: string) {
    this.nome = nome
    this.email = email
    this.dataNasc = dataNasc
    especialidade = especialidade
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

  getEspecialidade(){
    return this.especialidade
  }

  setDataNasc(data: string){
    const testagem = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/
    if(testagem.test(data)){
      const dataEditada = data.split("/")
    return dataEditada[2] + "-" + dataEditada[1] + "-" + dataEditada[0] as string
    } 
  }
}

