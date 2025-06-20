import { User } from "./user.js";

export class Bank {
    users: User[];
    transactionIds: number[];

    constructor() {
        this.users = [];
        this.transactionIds = [];
    }

    //does user exist method()
    userExists(users: User[], userName: string): boolean {
        for (const user of users) {
            if (user.name === userName) {
                return true;
            }
        }
        return false;
    }
}