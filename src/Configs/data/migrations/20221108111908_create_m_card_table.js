/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("m_card", function (table) {
    table.increments("id").primary();
    table.string("card_name", 64);
    table.string("card_img_url", 255);
    table.string("card_content", 3000);
    table.string("is_delete", "boolean");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("m_card");
};
