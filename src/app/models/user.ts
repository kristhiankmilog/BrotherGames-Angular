import { Change } from '../models/change';

export class User {
private firstname: string;
private lastname: string;
private image: string;
private changes: Change[] = [];


constructor(firstname: string, lastname: string, image: string) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.image = image;
        }
    }
