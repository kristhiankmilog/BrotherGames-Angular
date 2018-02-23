export class Comment{
    content: string;
    rate:number;
    id:number;
    user:string;


    constructor(content: string,rate:number,id:number,user:string){
        this.content = content;
        this.rate=rate;
        this.id=id;
        this.user=user

    }

}
