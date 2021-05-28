const {db} = require('../db/dbsetup')


// iii) List overall sale of each petroleam product by country. Note: Do not count zero during average calulation
const overallSale = ((req,res) => {
db.all("SELECT avg( sale) as Avg, country,petroleum_product FROM petroleumReport  where sale>0 GROUP BY  petroleum_product,country ; ", function(err, rows) {
    if (err) {
        throw err;
    }
    res.json({ rows})
    console.log(rows)
})

})


//  iv)List average sale of each petroleum product for 2 years of interval
const averageSale = ((req,res) => {
db.all("SELECT avg(sale) as avg,  year,petroleum_product FROM petroleumReport  where   year between '2007' and '2014'  GROUP BY petroleum_product,year; ", function(err, rows) {
    if (err) {
        throw err;
    }
    
    res.json({ rows})
    console.log(rows)
})
})



// V. At which year each petroleum product had the least sale. Note: Do not count zero as least sale
const minSale = ((req,res) => {
db.all("SELECT min( sale) as minimumSale, year,petroleum_product FROM petroleumReport  where sale>0 GROUP BY  petroleum_product,year ; ", function(err, rows) {
    if (err) {
        throw err;
    }

        
    res.json({ rows})
    console.log(rows)

})
})

module.exports = {overallSale, averageSale,minSale}



