
exports.up = function (knex) {
    return knex.schema.createTable("media_automation", (table) => {
        table.increments("id").primary();
        table.string("link").notNullable().unique();
        table.string("name").notNullable();
        table.string("description").nullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("media_automation");
};
