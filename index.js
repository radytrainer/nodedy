const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000, () => console.log("Server starting..."))

app.use(express.static('public'))
app.use(express.json())

let comments = [
    {username:"rady", comment: "សួស្តី!"},
   
];
app.get('/post', (req, res) => {
    res.send(comments);
});

app.post('/post', (req, res) => {
    let comment =  req.body;
    comments.push(comment);
    res.send(comments);
});

