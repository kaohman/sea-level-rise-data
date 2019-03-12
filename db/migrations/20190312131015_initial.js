
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('states', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('coast');
      
      table.timestamps(true, true);
    }),

    knex.schema.createTable('stations', (table) => {
      table.increments('id').primary();
      table.integer('state_id').unsigned();
      table.foreign('state_id').references('states.id');
      table.bigInteger('noaa_id');
      table.float('slr_rate');
      table.string('name');

      table.timestamps(true, true);
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('states'),
    knex.schema.dropTable('stations')
  ]);
};
