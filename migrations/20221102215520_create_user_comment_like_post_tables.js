/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("username").notNullable();
      table.string("desc").notNullable();
      table.string("img").notNullable();
    })
    .createTable("posts", (table) => {
      table.increments("id").primary();
      table.string("img").notNullable();
      table.string("desc").notNullable();
      table
        .integer("user_id").defaultTo("5")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("comments", (table) => {
      table.increments("id").primary();
      table.string("text").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("post_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("posts")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("likes", (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("post_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("posts")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("likes")
    .dropTable("comments")
    .dropTable("posts")
    .dropTable("users");
};
