// This is a basic Express.js web server written in JavaScript (Node.js). It sets up HTTP endpoints (routes) that send back responses when visited in a browser or API client.

//below line Loads environment variables from a hidden .env file into Node.js's process.env object.
require('dotenv').config()
const express = require('express');    //Imports the Express.js framework module into your code and assigns it to the express variable.
const app = express()  //Initializes an instance of an Express application, app is the main object you use to define routes, set up middleware, and start listening for web traffic.
const port = 4000   //Declares a fallback port number (3000) stored as a constant variable
// In your current app.listen implementation below, this variable isn't actually being used for the network binding, but it is referenced in the console log message

app.get('/', (req, res) => {   
  res.send('Hello World!')
})
//workflow o=f above
//When someone sends a GET request to the main/root URL...
//req and res are two objects automatically provided by Express.
// arrow function Take req and res, and execute the following code

app.get('/login', (req, res) => {
  res.send('<h1>hii gaizz</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>youtube is opened</h2>')
})

app.listen(process.env.PORT, () => {   //app.listen(...): Binds and listens for connections on the specified host and port. process.env.PORT: Tells the app to use the PORT variable defined inside your .env file
  console.log(`Example app listening on port ${port}`)
})