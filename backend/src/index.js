const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Médodos HTTP
 * 
 * GET: Buscar informações no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Apagar uma informção no back-end
 * 
 */

 /**
  * Tipos de parâmetros
  * 
  * Query params: Parâmetros nomeados enviados na rota após "?", (filtos, paginação)
  * Route params: Parâmetros utilizados para identificar recursos
  * Request body: Corpo da requisição, utilizado pra criar ou alterar recusros
  */