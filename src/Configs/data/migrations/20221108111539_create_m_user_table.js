/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("m_user", function (table) {
    table.increments("id").primary();
    table.string("user_email", 32).unique().notNullable().index();
    table.string("first_name", 32);
    table.string("last_name", 32).notNullable();
    table.string("user_password", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("m_user");
};
