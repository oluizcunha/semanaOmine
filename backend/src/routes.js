const express = require('express');
const routes = express.Router();

const connection = require('./database/connection');

const crypto = require('crypto');

routes.get('/ongs', async (request, response) => {
  const ongs = await connection('ongs').select('*');

  return response.json(ongs);
});

//Async pois vai esperar realizar a conexão no banco antes de executar o restante dos códigos
routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;
  console.log(name, email, whatsapp, city, uf);

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  });

  return response.json({ id });
});

module.exports = routes;
