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
