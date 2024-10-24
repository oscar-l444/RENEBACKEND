const productosBD=require("./conexion").productos;
const Producto = require("../clases/productosClases");
const { productos }= require("./conexion");

function validarDatos(productos2){
    var datosCorrectos=false;
    if(productos2.producto!=undefined && productos2.cantidad!= undefined && productos2.precio!= undefined){
     datosCorrectos=true;
    }
        return datosCorrectos;
}

async function mostrarProductos(){
    const productos=await productosBD.get();
    var productosValidos=[];
    productos.forEach(producto => {
        const producto1= new  Producto({id:producto.id,...producto.data()});
        const productos2 = producto1.getProducto;        
        if(validarDatos(productos2)){
            productosValidos.push(productos2);
        }
    });
    return productosValidos;
}

async function buscarPorId(id) {
    const producto=await productosBD.doc(id).get();
    const producto1=new Producto({id:producto.id,...producto.data()});
    var productoValido={error:true};
    if(validarDatos(producto1.getProducto)){
    productoValido=producto1.getProducto
    }
    return productoValido
}

async function nuevoProducto(data){
    const producto1=new Producto(data);
    var productoValido=false;
    if(validarDatos(producto1.getProducto)){
        await productosBD.doc().set(producto1.getProducto)
        productoValido=true;
    }
    return productoValido;
}

async function borrarProducto(id) {
    const producto = buscarPorId(id);
    var borrado=false;
    if(producto.error!=true){
        await productosBD.doc(id).delete();
        borrado=true;
    }
    return borrado;
}

module.exports={
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarPorId
}
