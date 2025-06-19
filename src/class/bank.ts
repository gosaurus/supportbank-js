import { User } from "./user.js";

export class Bank {
    users: User[];
    transactionIds: number[];

    constructor() {
        this.users = [];
        this.transactionIds = [];
    }
}