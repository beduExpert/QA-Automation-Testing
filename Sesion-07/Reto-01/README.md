# Reto 1 - Creación de la base de datos

## Desarrollo

A continuación añade los campos: _name, description, interest, starting_amount, final_amount, start_date y end_date_ a
la tabla investments.

Para revisar los tipos de datos existentes en SQLLite puede revisar el
siguiente [recurso](https://www.sqlite.org/datatype3.html)


<details>
  <summary>Solución</summary>

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
