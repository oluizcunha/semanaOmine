const connection = require('../database/connection');

module.exports = {
  //retornando casos especificos de uma unica ong ( ficou fora do controler da ong, pq esta tentando seguir documentação de mvc)
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  },
};
