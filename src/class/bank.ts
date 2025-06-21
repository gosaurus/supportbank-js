import { User } from "./user.js";
import { Transaction } from "./transaction.js";

export class Bank {
    users: User[];
    transactions: Transaction[];

    constructor() {
        this.users = [];
        this.transactions = [];
    }

    userExists(users: User[], userName: string): boolean {
        for (const user of users) {
            if (user.name === userName) {
                return true;
            }
        }
        return false;
    }

    getUser(users: User[], userName: string): User {
        for (const user of users) {
            if (user.name === userName)
                return user;
        }
        throw new Error(`Error: No User named ${userName}.`);
    }

    transactionExists(transactions: Transaction[], newTransaction: Transaction): boolean {
        for (const transaction of transactions) {
            if (transaction === newTransaction)
                return true;
        }
        return false;
    }

    listAllUsers() {

    }
}