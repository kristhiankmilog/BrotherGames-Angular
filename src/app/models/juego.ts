import { Group } from "./group";
import {Clase} from "./vendedor";


export class Juego{
    nombre: string;
    image: string;
    description: string;
    type: string;
    calificacion: number;
    vendedor: Vendedor[];


    constructor(nombre: string, image: string,  description: string, type: string, calificacion: string, vendedor: Vendedor[] ){
        this.nombre = nombre;
        this.image = image;
        this.description = description;
        this.type = type;
        this.calificacion =calificacion;
        this.vendedor = vendedor;

    }

}