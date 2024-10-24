const express = require("express");
const cors = require("cors");
const usuariosRutas=require("./rutas/rutasUsuarios");
const productosRutas=require("./rutas/rutasProductos");

const app=express();{
app.use(express.urlencoded({extended:true}));//decir que vamos a aceptar datos de un formulario
app.use(express.json());
app.use(cors());
app.use("/usu",usuariosRutas);//aqui se dice que se va usar app desde donde y que ruta usar
app.use("/prod",productosRutas);
}

const port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
});