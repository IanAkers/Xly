var Companies = require('./companiesModel');

var getAll = function(req, res) {
  Companies.query('select * from fund_list', 
    function(err, results) {
      if (err) {
        return console.log('There was an error querying the database: ', err);
      }
      res.status(200).json(results);
    });
};

module.exports = {
  getAll: getAll
};
