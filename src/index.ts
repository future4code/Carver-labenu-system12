import app from "./app"
import { pegarDocentes } from "./endpoints/docentes/pegarDocentes"
import { criarDocente } from "./endpoints/docentes/criarDocente"
import { mudarTurmaDocente } from "./endpoints/docentes/mudarTurmaDocente"
import { buscarTurmaAtiva } from "./endpoints/turma/buscarTurmaAtiva"
import { criarTurma } from "./endpoints/turma/criarTurma"
import { criarEstudante } from "./endpoints/estudantes/criarEstudante"
import { mudarTurmaModulo } from "./endpoints/turma/mudarTurmaModulo"
import { PegarEstudante} from './endpoints/estudantes/pegarEstudantes'
import { MudarEstudante } from "./endpoints/estudantes/mudarEstudante"

//Localizar

app.get("/docente", pegarDocentes)
app.get("/turma", buscarTurmaAtiva)
app.get("/alunos", PegarEstudante)

//Criar

app.post("/docente/criar", criarDocente)
app.post("/turma/criar", criarTurma)
app.post('/alunos/criar', criarEstudante)

//Update

app.put("/docente/editar", mudarTurmaDocente)
app.put("/turma/editar", mudarTurmaModulo)
app.put("/alunos/editar", MudarEstudante)



