class Producto{
    constructor(data){
        this.id=data.id;
        this.producto=data.producto;
        this.cantidad=data.cantidad;
        this.precio=data.precio;
    }

    set id(id){
        this._id=id;
    }
    
    set producto(producto){
        const productoRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(productoRegex.test(producto)){
            this._producto=producto;
        }
    }
    
    set cantidad(cantidad){
        const cantidadRegex = /^\d{4,}$/;
    {
        this._cantidad=cantidad;
        }
    }
    
    set precio(precio){
        const precioRegex = /^\d+(\.\d+)?$/;
    {
        this._precio=precio;
        }
    }
    
    get id(){
        return this._id;
    
    }
    
    get producto(){
        return this._producto;
    }
    
    get cantidad(){
        return this._cantidad;
    }
    
    get precio(){
        return this._precio;
    }
    
    get getProducto(){
        const conid={
                id:this._id,
                producto:this._producto,
                cantidad:this._cantidad,
                precio:this._precio,
        }
        const sinid={
            producto:this._producto,
            cantidad:this._cantidad,
            precio:this._precio,
        }
        if(this.id!=undefined){
            return conid;
        }else{
            return sinid;
        }
    }
    }
    
    module.exports=Producto;