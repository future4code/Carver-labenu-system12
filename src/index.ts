import app from "./app"
import { pegarDocentes } from "./endpoints/docentes/pegarDocentes"
import { criarDocente } from "./endpoints/docentes/criarDocente"
import { mudarTurmaDocente } from "./endpoints/docentes/mudarTurmaDocente"
import { buscarTurmaAtiva } from "./endpoints/turma/buscarTurmaAtiva"
import { criarTurma } from "./endpoints/turma/criarTurma"

app.get("/docente", pegarDocentes)
app.get("/turma", buscarTurmaAtiva)
app.post("/docente/criar", criarDocente)
app.post("/turma/criar", criarTurma)
app.put("/docente/editar", mudarTurmaDocente)

