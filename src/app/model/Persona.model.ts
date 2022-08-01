export class Persona {
    //Con el ? adelante le digo que no es necesario el id ahora mismo
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre:String, apellido:String, img:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }

}