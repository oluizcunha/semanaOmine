const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    console.log(ong_id);

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    console.log(ong_id);

    return response.json({ id });
  },

  async index(request, response) {
    //Caso ele não tenha parametro de paginação ele insere por padrão o  1
    const { page = 1 } = request.query;

    //Contando quantos registros existem
    const [count] = await connection('incidents').count();
    console.log(count);

    //Definindo as primeiras paginas .offset((page - 1) * 5)
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5) //Definindo as primeiras paginas .offset((page - 1) * 5)
      //inserindo join na tabela para poder trazer todos os dados dos incidents
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    //Devolvendo pelo cabeçalho da resposta o total de registros (para uso do front end)
    response.header('X-Total-Count', count['count(*)']);
    return response.json(incidents);
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id != ong_id) {
      return response.status(401).json({ error: 'operação não permitida' });
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  },
};
