const path = require("path");
const htmlWebpack = require("html-webpack-plugin"); //modulo de webpack para convertir html
const cssWebpack = require("mini-css-extract-plugin"); //modulo para minificar css

//Determinar estado de desarrollo
const devMode = process.env.NODE_ENV != "production";
console.log(devMode);

//TODO: configuración webpack
module.exports = {
  entry: "./frontend/app.js", //De donde obtendra el codigo
  //donde colocara el codigo convertido
  output: {
    path: path.join(__dirname, "backend/public"), //ruta de la carpeta
    filename: "js/bundle.js" //nombre del archivo
  },
  mode:'production',
  module: {
    //rules determina el comportamiento de los archivos que elijamos
    rules: [
      {
        test: /\.css/, //selecciona todos los css
        //modulos a utilizar
        use: [
          /*si estoy en desarrollo carga los archivos dentro de javascript 
            y si estoy en produccion cargalos en su propio archivo css*/
          devMode ? "style-loader" : cssWebpack.loader, //para cargar css
          "css-loader" //para entender css dentro del javascript
        ]
      }
    ]
  },

  plugins: [
    //Configuracion del html minificado
    new htmlWebpack({
      template: "./frontend/index.html", //archivo html a convertir
      //configuracion para minificar html
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),

    //Configuracion del CSS minificado
    new cssWebpack({
      filename: "css/bundle.css"
    })
  ]
};
