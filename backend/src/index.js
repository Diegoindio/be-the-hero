//(const importa alguma coisa pro node) 
const express = require ('express'); //importando o módulo express para dentro da variável express.
const cors = require('cors');
const routes = require('./routes');//importando o módulo routes para dentro da variável routes.
const app = express();   //instanciando, criando a minha aplicação.(Variavel que armazena minha aplicação. )
//rota raiz ('/') quando não tem rota

app.use(cors());
app.use(express.json());
app.use(routes);
//express converter um json para um objeto javascript

/**
 * Rota / Recurso (Tabela, entidade que queremos buscar)
 */

 /**
  * Método HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletrar uma informação no back-end
  */


  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * http://localhost:3333/users?name=Diego
   * http://localhost:3333/users?page=2&name=Diego&idade=25
   * 
   * Route Params: Parâmetros utilizados para identificar recursos
   * app.post('/users/:id', (request, response) => {
   * http://localhost:3333/users/1
   * 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */
   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('user').select('*').where()
    */


app.listen(3333); //localhost:3333 um padrão dadotado para porta node pro curso.
