const express = require('express');

//app is an object used to interact with express functionalities
const app = express();

app.get('/', (req, res) => {
    if(req.url === '/'){
        res.send("hello how are you");
    }
});

app.get('/ineuron/courses', (req,res) => {
    res.send(['Blockchain', 'Data Science', 'Web Development', 'Java', 'testing']);
})

//year and month are req parameter
app.get('/ineuron/courses/:year/:month', (req, res) => {
    res.send(req.params);
})

const port = process.env.PORT | 3000;
app.listen(port,() => console.log(`lisenting on port ${port}`));

