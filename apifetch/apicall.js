const {db,closeDB} = require('../db/dbsetup')
const createTable = require ('../db/inserttable')
const axios = require('axios');


const apiCall = (db) => {
    //Make a request for a user with a given ID
    axios
        .get(
            'https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json'
        )
        .then(function (response) {
            // handle success
            response.data.map((val) => {
                db.run(
                    'INSERT INTO petroleumReport (year,petroleum_product,sale, country) VALUES(?,?,?,?)',
                    [val.year, val.petroleum_product, val.sale, val.country],
                    
                    function (err) {
                        if (err) {
                            return console.log(err.message);
                        }
                        console.log(`A new row has been inserted.`);
                    }
                );

                console.log(val.year,val.petroleum_product)
              
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            closeDB(db);
        });
};
 
createTable(db);
apiCall(db);
