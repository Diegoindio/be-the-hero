const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //metodo que faz listagem para todos dados de uma tabela
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
   
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        //desacoplando o modo de rotas do express em uma nova variável
        //Acessando minha rota atraves do GET
            const id = crypto.randomBytes(4).toString('HEX');
        
            
           await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })
           
            return response.json({ id });
    }
};