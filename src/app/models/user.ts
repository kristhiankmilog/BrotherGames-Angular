import { Change } from '../models/change';
import { Requests } from '../models/requests';

export class User {
private firstname: string;
private lastname: string;
private image: string;
private changes: Change[] = [];
private listRequests: Requests[] = [];


constructor(firstname: string, lastname: string, image: string) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.image = image;
        }
    }
