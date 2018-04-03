//import { Group } from "./group";
import {Seller} from "./seller";
import {Comment} from "./comment";

export class Game{
    name: string;
    image: string;
    description: string;
    type: string;
    rate: number;
    seller:Seller[];


    constructor(name: string, image: string,  description: string, type: string, rate: number, seller: Seller[] ){
        this.name = name;
        this.image = image;
        this.description = description;
        this.type = type;
        this.rate =rate;
        this.seller= seller;

    }

}