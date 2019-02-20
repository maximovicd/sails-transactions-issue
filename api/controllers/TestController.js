
module.exports = {
  
  test: async (req, res) => {
    const created = await sails.getDatastore().transaction(async (db) => {
      const result = await Model.create({ first: 'test', last: 'test' }).usingConnection(db);
      const resultTwo = await Model.findOne({ id: result.id }).usingConnection(db);
      console.log('resulttwo', resultTwo);
      return resultTwo;
    });

    return res.json(created);
  }
}