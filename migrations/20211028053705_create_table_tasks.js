
exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.datetime('estimateAt').notNull()
        table.datetime('doneAt')
        //table.integer('userId').notNull()
        //table.foreign('userId').references('id').inTable('users')
        table.integer("userId", 11).unsigned().references("id").inTable("users")
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
};
