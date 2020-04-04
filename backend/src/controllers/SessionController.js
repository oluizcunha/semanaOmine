const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if (!ong) {
      console.log('teste');
      return response.status(400).json({ error: 'Não existe ong com este id' });
    }

    return response.json(ong);
  },
};
