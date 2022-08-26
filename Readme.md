para hacer una funcion que por dentro es un objeto de funciones anidandolas todas las funciones dentro de un objeto, 
entonces solamente tengo que usar los metodos de la funcion, pero solo sirve para un controlador especifico.
por ejemplo puede usarse como controlador para una parte especifica del cv, hay que hacer controladores especificos.

para llamarlo en este caso en las rutas, haces:

const controller = require('../controller/controller')
router.get('/', controller.(la funcion anidada))


const controller = {
    index(req, res) {
        res.render('index', { title: 'Express' });
    },

    user (req, res) {
        res.send('respond with a resource');
    }
}

module.exports = controller


para poder utilizar los environments, se tiene que instalar la libreria dotenv, crear el archivo .env donde van a ir nuestras variables.
posteriormente, en el www de bin se requiere (require('dotenv).config()) la libreria. Ayuda tambien poner un clg (console.log(`http://localhost:${process.env.PORT}`)) que nos muestre la coneccion.