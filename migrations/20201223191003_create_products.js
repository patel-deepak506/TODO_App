
exports.up = function(knex) {
    return knex.schema.createTable('anand',(value)=>{
        value.string('Task').notNull().default('some problems in this task ');
        value.string('Descripction').notNull().default('something poblems in descripction it has taken default values');
    });


};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('anand');  
};
 
// exports.up = function(knex) {
//     return knex.schema
//         .createTable('happy', function (table) {
//             table.increments('id');
//             table.string('first_name', 255).notNullable();
//             table.string('last_name', 255).notNullable();
//         })
//         .createTable('nice', function (table) {
//             table.increments('id');
//             table.decimal('price').notNullable();
//             table.string('name', 100).notNullable();
//         });
//     };
    
//     exports.down = function(knex) {
//     return knex.schema
//         .dropTable("happy")
//         .dropTable("nice");
//     };
