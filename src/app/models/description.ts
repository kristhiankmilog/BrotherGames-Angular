export class DescriptionGame {
    private photo: string;
        private name: string;
        private description: string;
        private price: String;
        private storeGame: String;
        private link: String;

    
        constructor(photo:string,name:string,description: string, price: String, storeGame: String,link: String){
            this.photo=photo;
            this.name= name;
            this.description = description;
            this.price = price;
            this.storeGame = storeGame;
            this.link = link;
        }
    }
