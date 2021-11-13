# Ejemplo 1 - Bases de datos

## :dart: Objetivos

- Crear nuestra base de datos que nos permitirá ejemplificar y aplicar inversión de control

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest
- sqlite3

## Desarrollo

En este ejemplo crearemos nuestra conexión a base de datos y la tabla que nos permitirá almacenar las inversiones.

El motor de base de datos que utilizaremos e SQLite

SQLite es un sistema de gestión de bases de datos relacional compatible con ACID, contenida en una relativamente
pequeña (~275 kiB) biblioteca escrita en C. SQLite es un proyecto de dominio público creado por D. Richard Hipp.

A diferencia de los sistemas de gestión de bases de datos cliente-servidor, el motor de SQLite no es un proceso
independiente con el que el programa principal se comunica. En lugar de eso, la biblioteca SQLite se enlaza con el
programa pasando a ser parte integral del mismo. El programa utiliza la funcionalidad de SQLite a través de llamadas
simples a subrutinas y funciones. Esto reduce la latencia en el acceso a la base de datos, debido a que las llamadas a
funciones son más eficientes que la comunicación entre procesos. El conjunto de la base de datos (definiciones, tablas,
índices, y los propios datos), son guardados como un solo fichero estándar en la máquina host. Este diseño simple se
logra bloqueando todo el fichero de base de datos al principio de cada transacción.

En su versión 3, SQLite permite bases de datos de hasta 2 Terabytes de tamaño, y también permite la inclusión de campos
tipo BLOB

En la raíz de nuestro proyecto crearemos el siguiente archivo:

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

Como podemos ver de esta formara estaremos creando la tabla `investment`con un solo campo llamado `id` que será un
string porque deseamos guardar un uuid.

En nuestro siguiente reto añadiremos los demás campos.


