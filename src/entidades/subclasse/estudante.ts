import {Pessoas} from '../superclasse/pessoa'

export class Estudante extends Pessoas {
    protected hobbyId:string = Math.floor(Date.now() * Math.random()).toString(36)
    protected hobbies:string = ''

    constructor(nome: string, email: string, dataNasc: string, hobby:string){
        super(nome, email, dataNasc)
        this.hobbies = hobby
    }

    getHobbies():string{
        return this.hobbies
    }

    getHobbiesId():string{
        return this.id
    }
}

