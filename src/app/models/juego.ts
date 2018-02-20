import { Group } from "./group";
import {Seller} from "./seller";


export class Game{
    name: string;
    image: string;
    description: string;
    type: string;
    rate: number;
    seller:Seller[];


    constructor(name: string, image: string,  description: string, type: string, rate: string, seller: Seller[] ){
        this.nombre = nombre;
        this.image = image;
        this.description = description;
        this.type = type;
        this.rate =rate;
        this.seller= seller;

    }

}