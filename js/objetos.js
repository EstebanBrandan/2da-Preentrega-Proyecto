class Productos{

    constructor(codigo, nombre, marca, precio){
    
        this.codigo = codigo;
        
        this.nombre = nombre;
        
        this.marca = marca;
        
        this.precio = precio;

    }

}

const productos = [];

productos.push(new Productos(1, "SMART TV","LG" , 200000));

productos.push(new Productos(2, "SMART TV", "PHILLIPS", 240000));

productos.push(new Productos(3, "SMART TV", "SAMSUNG", 75000));

productos.push(new Productos(4, "CONSOLA", "SONY", 219000));

productos.push(new Productos(5, "CELULAR", "SAMSUNG", 89000));

productos.push(new Productos(6, "CELULAR", "APPLE", 250000));

productos.push(new Productos(7, "CELULAR", "XIAOMI", 35000));

productos.push(new Productos(8, "CELULAR", "LG", 54000));

productos.push(new Productos(9, "CELULAR", "MOTOROLA", 67000));

productos.push(new Productos(10, "TABLET", "APPLE", 149000));

function guardarObjeto(clave, valor){

    localStorage.setItem(clave, valor);

}

if (!localStorage.getItem("stock")){

    guardarObjeto("stock", JSON.stringify(productos))

}