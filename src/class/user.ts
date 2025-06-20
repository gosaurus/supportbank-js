import { Transaction } from "./transaction.js";

export class User {
    name: string;
    transactionPaid: Transaction[];
    transactionOwed: Transaction[];

    constructor(
        name: string,
        // transactionPaid: Transaction[],
        // transactionOwed: Transaction[]
    ) {
        this.name = name;
        this.transactionPaid = [];
        this.transactionOwed = [];
    }

    toString() {
        console.log(`User ${this.name} created`);
    }
}