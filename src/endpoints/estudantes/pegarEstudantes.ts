import { Request, Response } from "express";
import { connection } from "../../connection";

export const PegarEstudante = async (req:Request, res:Response) => {
    try{
        const nome = req.body
        let listaEstudante 

        if(nome){
            listaEstudante = await connection('estudante').where({nome: nome})
        } else{
            listaEstudante = await connection('estudante')
        }

        res.send(listaEstudante)
    } catch(error:any) {
        res.send(error.message)
    }

}