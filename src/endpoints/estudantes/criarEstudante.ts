import { Request, Response } from "express";
import { connection } from "../../connection";
import { Estudante } from "../../entidades/subclasse/estudante";

export const criarEstudante = async (req:Request, res:Response):Promise<void> =>{
    try {
        // const {nome, email, dataNasc, hobbies} = req.body

        const estudante = new Estudante(req.body.nome, req.body.email, req.body.dataNasc, req.body.hobbies)
        const estudanteHobbiesId = Math.floor(Date.now() * Math.random()).toString(36)

        if (!req.body.nome || !req.body.email || !req.body.dataNasc || !req.body.hobbies) {
            throw new Error('As informações são insuficientes.')
        }

        const criarHobby = await connection('hobby')
        .insert({
            id: estudante.getHobbiesId(),
            nome: estudante.getHobbies()
        })

        const novoEstudante = await connection('estudante')
        .insert({
            id: estudante.getId(),
            nome: estudante.getNome(),
            email: estudante.getEmail(),
            data_nasc: estudante.transformarDataNasc(req.body.dataNasc),
            turma_id: estudante.getTurmaId()
        })

        const relacaoEstudanteHobbies = await connection('estudante_hobby')
        .insert({
            id: estudanteHobbiesId,
            estudante_id: estudante.getId(),
            hobby_id: estudante.getHobbiesId()
        })

        res.send('Estudante Cadastrado!')
    } catch(error:any) {
        res.send(error.message)
    }

}