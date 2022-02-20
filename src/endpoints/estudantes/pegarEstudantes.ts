import { Request, Response } from "express";
import { connection } from "../../connection";

export const PegarEstudante = async (req:Request, res:Response) => {
    try{
        const nome = req.body.nome
        let listaEstudante

        if(nome){
            listaEstudante = await connection('estudante').where("nome", "like", `%${nome}%`)
        } else {
            throw new Error("Informe um parâmetro válido")
        }

        const mapearEstudante = listaEstudante.map((estudante) =>{
            return {
                id: estudante.id,
                nome: estudante.nome,
                email: estudante.email,
                dataNasc: estudante.data_nasc.toLocaleDateString("pt-BR"),
                turmaId: estudante.turma_id
            }
        })

        res.send(mapearEstudante)
    } catch(error:any) {
        res.send(error.message)
    }

}