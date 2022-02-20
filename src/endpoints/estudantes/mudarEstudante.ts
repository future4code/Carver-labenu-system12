import { Request, Response } from "express";
import { connection } from "../../connection";

export const MudarEstudante = async (req:Request, res:Response) => {
    try {
        const {nome, turma} = req.body

        if(!req.body.nome || !req.body.turma){
            throw new Error('Informações insuficientes para atualizar cadastro.')
        }
        
        const alterarTurma = await connection('estudante')
        .where({nome: nome})
        .update({turma_id: turma})

        res.send('Turma Alterada!')
    } catch(error:any) {
        res.send(error.message)
    }
}
