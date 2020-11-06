const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'César',
            edad: 28,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('hola mundo');
        res.end();

    })
    .listen(8080);

console.log('escuchando en el puerto 8080');