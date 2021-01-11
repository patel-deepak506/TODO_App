
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nice').del().then(function () {
      // Inserts seed entries
      return knex('nice').insert([
        {price: '3465.3',name:'ramesh'},
        {price: '54454.455',name:'rohit'},
        {price: '343.24',name:'vinay'}
      ]);
    });
};
