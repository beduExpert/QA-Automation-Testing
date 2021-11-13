# Reto 1 - Creación de la base de datos

## :dart: Objetivos

- Crear nuestra base de datos que nos permitirá ejemplificar y aplicar inversión de control

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest
- sqlite3

## Desarrollo

A continuación añade los campos: _name, description, interest, starting_amount, final_amount, start_date y end_date_ a
la tabla investments.

Para revisar los tipos de datos existentes en SQLLite puede revisar el
siguiente [recurso](https://www.sqlite.org/datatype3.html)

1. En el archivo `database.js`, dentro de la sentencia `CREATE TABLE` añade los campos necesarios para poder almacenar
   nuestro modelo de inversiones.

<details>
  <summary>Solución</summary>

1. Añadimos los campos name, description, interest, starting_amount, final_amount, start_date, end_date
2. Utilizamos los tipos de datos correspondientes

`database.js`

```javascript

const sqlite3 = require('sqlite3').verbose()

const DB_SOURCE = "db.sqlite"

let db = new sqlite3.Database(DB_SOURCE, (err) => {
    if (err) {
        throw err
    } else {
        db.run(`CREATE TABLE investment (
            id  text KEY,
            name text, 
            description text, 
            interest real, 
            starting_amount real, 
            final_amount real, 
            start_date number, 
            end_date text, 
            )`,
            (err) => {
                if (err) {
                    // Table already created
                }
            });
    }
});


module.exports = db


```

</details>
