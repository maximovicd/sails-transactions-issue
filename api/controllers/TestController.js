
module.exports = {
  
  test: async (req, res) => {
    const created = await sails.getDatastore().transaction(db => Model.create({ first: 'test', last: 'test' }).usingConnection(db).fetch());

    return res.json(created);
  }
}