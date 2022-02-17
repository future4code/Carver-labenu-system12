import app from "./app";
import { pegarDocentes } from "./endpoints/docentes/pegarDocentes";
import { criarDocente } from "./endpoints/docentes/criarDocente"

app.get("/docentes", pegarDocentes)
app.post("/criar/docente", criarDocente)
app.put("/mudar/docente")