
import {Seller} from "./seller";
import {Comment} from "./comment";

export class Game{
    id:number;
    name: string;
    image: string;
    comments: Comment[];
    description: string;
    rateAcum: number;
    seller:Seller[];


    constructor(id:number,name: string, image: string,comment:Comment[],  description: string,  rate: number, seller: Seller[] ){
        this.id=id;
        this.name = name;
        this.image = image;
        this.comments=comment;
        this.description = description;
        this.rateAcum =rate;
        this.seller= seller;

    }

}