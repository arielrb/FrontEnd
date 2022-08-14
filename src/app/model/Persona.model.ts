export class Persona {
    //Con el ? adelante le digo que no es necesario el id ahora mismo
    id?: number;
    nombre: string;
    apellido: string;
    img: string;

    constructor(nombre:string, apellido:string, img:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }

}