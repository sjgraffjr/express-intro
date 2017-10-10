const express = require('express');
const app = express(); //app is an object with a bunch of methods to build a server



//act like our database
const fruits = ['apple','pear','banana'];
//create a route that will show each idividual fruit bases on their index number
//:whatever is called params --> accessible by req.params.nameofwhatever your params called
app.get('/fruits/:index',(req, res)=>{
	res.send(fruits[req.params.index])
})

// app.get('/', (request, response) => {
//  response.send('Hi Im the information the server has sent to the client')
// });



// app.get('/tacos',(req,res) =>{
// 	res.json({
// 		"taco": 52,
// 		"type": "carne asada"
// 	})
// })

// app.get('/beers', (req,res) =>{
// 	console.log(req)
// 	res.json({
// 		"beer": "Amstel Light",
// 		"ABV": "3.5%",
// 		"type": "lager"
		
// 	})
// })

// app.listen(3000, () => {
//  console.log('I am listening on port 3000')
// });
