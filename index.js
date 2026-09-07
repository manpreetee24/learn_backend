// This is a basic Express.js web server written in JavaScript (Node.js). It sets up HTTP endpoints (routes) that send back responses when visited in a browser or API client.

//below line Loads environment variables from a hidden .env file into Node.js's process.env object.
require('dotenv').config()
const express = require('express');    //Imports the Express.js framework module into your code and assigns it to the express variable.
const app = express()  //Initializes an instance of an Express application, app is the main object you use to define routes, set up middleware, and start listening for web traffic.
const port = 4000   //Declares a fallback port number (3000) stored as a constant variable
// In your current app.listen implementation below, this variable isn't actually being used for the network binding, but it is referenced in the console log message

const githubData = {
  "login": "hiteshchoudhary",
"id": 11613311,
"node_id": "MDQ6VXN1cjExNjEzMzEx",
"avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/hiteshchoudhary",
"html_url": "https://github.com/hiteshchoudhary",
"followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
"following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
"gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
"starred_ur1": "https://api.github.com/users/hiteshchoudhary/starred{/owner} {/repo}",
"subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
"organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
"repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
"events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
"received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
"type": "User",
"site_admin": false,
"name": "Hitesh Choudhary",
"company": null,
"blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
"location": "India",
"email": null,
"hireable": null,
"bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
"twitter_username": "hiteshdotcom",
"public_repos": 71,
"public_gists": 1,
"followers": 7037,
"following": 0,
"created_at": "2015-03-23T13:03:25Z",
"updated_at": "2023-09-09T03:27:44Z"
}

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

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {   //app.listen(...): Binds and listens for connections on the specified host and port. process.env.PORT: Tells the app to use the PORT variable defined inside your .env file
  console.log(`Example app listening on port ${port}`)
})