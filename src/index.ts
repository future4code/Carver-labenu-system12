import app from "./app";
import { pegarDocentes } from "./endpoints/docentes/pegarDocentes";
import { criarDocente } from "./endpoints/docentes/criarDocente"
import { selecionarDocentes } from "./dados/docentes/selecionarDocentes";
import { selecionarEspecialidade } from "./dados/docentes/selecionarEspecialidade";
import { mudarTurmaDocente } from "./endpoints/docentes/mudarTurmaDocente";
import { pegarTurma } from "./endpoints/turma/pegarTurma";

app.get("/docente", pegarDocentes)
app.get("/turma", pegarTurma)
app.post("/docente/criar", criarDocente)
app.put("/docente/editar", mudarTurmaDocente)

