export class NewGame {
        private name: string;
        private description: string;
        private photo:string;

    
        constructor(photo:string,name: string, description: string){
            this.name= name;
            this.description = description;
            this.photo = photo;
        }
    }

