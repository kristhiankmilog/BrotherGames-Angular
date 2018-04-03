export class Comment{
    content: string;
    //gameId:number;
    user:string;
    rate:number;
    id:number;
    constructor(contenido:string,name:string,rate:number,id:number){
       this.rate=rate;
       this.content=contenido;
       this.user=name;
       this.id=id;

    }

}
