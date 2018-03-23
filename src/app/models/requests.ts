import { Change } from '../models/change';
import { User } from "../models/user";

export class Requests {

    private userRq: User;
    private change1: Change;
    private change2: Change; 
    private state: String;   
    
    constructor(userRq: User, change1: Change, change2: Change) {
        this.userRq=userRq;
        this.change1=change1;
        this.change2=change2;
        this.state="Pending";
    }



}
