const express = require('express');
const app = express(); //app is an object with a bunch of methods to build a server


app.get('/', (request, response) => {
 response.send('Hi Im the information the server has sent to the client')
});



app.get('/tacos',(req,res) =>{
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get('/beers', (req,res) =>{
	console.log(req)
	res.json({
		"beer": "Amstel Light",
		"ABV": "3.5%",
		"type": "lager"
		
	})
})

app.listen(3000, () => {
 console.log('I am listening on port 3000')
});
