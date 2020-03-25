const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({
    evento: 'oii',
  });
});

routes.get('/users', (request, response) => {
  //Mostra o que ta dentro da url (http://localhost:3333/users?nome=luiz)
  const params = request.query;

  console.log(params);

  return response.json({
    mensagem: params,
  });
});

routes.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json({
    Mensagem: params,
  });
});

routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json({
    Mensagens: body,
  });
});

module.exports = routes;
