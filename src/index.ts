import app from "./app";
import { pegarDocentes } from "./endpoints/docentes/pegarDocentes";
import { criarDocente } from "./endpoints/docentes/criarDocente"
import { selecionarDocentes } from "./dados/docentes/selecionarDocentes";
import { selecionarEspecialidade } from "./dados/docentes/selecionarEspecialidade";

app.get("/docentes", pegarDocentes)
app.post("/criar/docente", criarDocente)
app.post("/editar/:docente")
