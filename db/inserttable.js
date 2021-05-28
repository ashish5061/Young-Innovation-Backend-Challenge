const db = require('./dbsetup')

const createTable = (db) => {
    db.run(
        'CREATE TABLE IF NOT EXISTS petroleumReport (   "_id"   INTEGER,    "year"  TEXT NOT NULL, "petroleum_product"  TEXT, "sale"    TEXT NOT NULL, "Country"    TEXT NOT NULL, PRIMARY KEY("_id" AUTOINCREMENT));',
        function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`A table has been inserted.`);
        }
    );
};

module.exports = createTable