const express = require('express')
const {overallSale, averageSale,minSale  } = require('./query/query')

const app = express()
app.use(express.json())



// iii) List overall sale of each petroleam product by country. Note: Do not count zero during average calulation
app.get('/country',overallSale)

//  iv)List average sale of each petroleum product for 2 years of interval
app.get('/interval', averageSale )



// V. At which year each petroleum product had the least sale. Note: Do not count zero as least sale
app.get('/minimum',minSale )




app.use('*', (req, res, next) => {
	res.status(404).json({
		message: 'Not Found',
	});
});



app.listen(4000,
console.log('Server running in port 4000')
  )