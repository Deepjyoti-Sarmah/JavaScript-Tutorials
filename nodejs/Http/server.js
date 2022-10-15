const http = require('http');

//create server - method - creates a server in http
//www.google.com/ineuron
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("hello, this is http server response \n");
        res.end();
    }

    if (req.url === "/ineuron/cources"){
        res.write(JSON.stringify(['Blockchain', 'Data Science', 'Web Development', 'Java', 'testing']));
        res.end();
    }

});


server.listen(3000);
console.log('Listening on port 3000');