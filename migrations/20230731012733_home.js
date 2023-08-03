/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("empresa").then(function(exists){
    if(!exists){
        return knex.schema.createTable("empresa", function(table){
            table.increments("empresa_id").primary();
            table.string("razon_social").notNullable();
            table.integer("telefono").notNullable();
            table.string("correo").notNullable();
            table.string("direccion").notNullable();
        })
    }
  })}

  exports.up = function (knex) {
    return knex.schema.hasTable("persona").then(function(exists){
      if(!exists){
          return knex.schema.createTable("persona", function(table){
              table.increments("persona_id").primary();
              table.string("nombre").notNullable();
              table.integer("telefono").notNullable();
              table.string("correo").notNullable();
              table.integer("precio_hora").notNullable();
              table.string("habilidad").notNullable();
          })
      }
    })}

    exports.up = function (knex) {
      return knex.schema.hasTable("pedido").then(function(exists){
        if(!exists){
            return knex.schema.createTable("pedido", function(table){
                table.increments("pedido_id").primary();
                table.increments("empresa_id").notNullable();
                table.increments("persona_id").notNullable();
                table.string("fecha").notNullable();
                table.integer("horas_trabajo").notNullable();
                table.integer("total").notNullable();
            })
        }
      })}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasColumn("empresa").then(function(exists){
    if(exists){
        return knex.schema.dropTable("empresa")
    }
  })
};  

exports.down = function(knex) {
  return knex.schema.hasColumn("persona").then(function(exists){
    if(exists){
        return knex.schema.dropTable("persona")
    }
  })
};  

exports.down = function(knex) {
  return knex.schema.hasColumn("pedido").then(function(exists){
    if(exists){
        return knex.schema.dropTable("pedido")
    }
  })
};  

