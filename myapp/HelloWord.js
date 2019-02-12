const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.send("Hello world!");
});
	
app.get('/HelloFolder', (req, res) => {
   res.send("Hello worlds!");
});


app.listen(8036, () => console.log(`Hello listening on port 8036!`))