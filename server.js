//cargar los paquetes de dependencias
var express = require('express');
var app = express();

//establecer el motor de vistas con EJS
app.set('view engine', 'ejs');

//renderizar con res.render para cargar el archivo de vistas EJS

//pagina index
app.get('/', function(req, res) {
        // variables y lista para que salga en pantalla. Despues llevarlas a index
            var mascotas = [
                { name: 'Pepe', organization: "caniche", birth_year: 2000},
                { name: 'Carapapa', organization: "perro patada", birth_year: 2015},
                { name: 'Mordisquitos', organization: "mastin", birth_year: 2013}
            ];
            var tagline = "Los perretes son válidos para pasear en confinamiento.";
        
            res.render('pages/index', {
                mascotas: mascotas,
                tagline: tagline
            });
        });

//pagina about
app.get('/about', function(req, res){
    res.render('pages/about');
});

//configurar el puerto a escuchar
app.listen(8888);
console.log('planazo de viernes');