const express = require('express')
const app = express()

const port = 3000
app.listen(port, () => console.log("Server starting..."))

app.use(express.static('public'))
app.use(express.json())

let comments = [
    {username:"rady", comment: "Hello World"},
   
];
app.get('/post', (req, res) => {
    res.send(comments);
});

app.post('/post', (req, res) => {
    let comment =  req.body;
    comments.push(comment);
    res.send(comments);
});

