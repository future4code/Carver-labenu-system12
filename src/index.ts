import app from "./app";
import { pegarDocentes } from "./endpoints/docentes/pegarDocentes";
import { criarDocente } from "./endpoints/docentes/criarDocente"
import { selecionarDocentes } from "./dados/docentes/selecionarDocentes";
import { selecionarEspecialidade } from "./dados/docentes/selecionarEspecialidade";
import { mudarTurmaDocente } from "./endpoints/docentes/mudarTurmaDocente";

app.get("/docente", pegarDocentes)
app.post("/docente/criar", criarDocente)
app.put("/docente/editar", mudarTurmaDocente)
