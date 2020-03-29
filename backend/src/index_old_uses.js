const express = require('express');

const app = express();
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    evento: 'oii',
  });
});

app.listen(3333);
app.get('/users', (request, response) => {
  //Mostra o que ta dentro da url (http://localhost:3333/users?nome=luiz)
  const params = request.query;

  console.log(params);

  return response.json({
    mensagem: params,
  });
});

app.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json({
    Mensagem: params,
  });
});

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json({
    Mensagens: body,
  });
});

app.listen(3333);
