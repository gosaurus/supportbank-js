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

    addTransactionPaidFromUser(newTransaction: Transaction) {
        this.transactionPaid.push(newTransaction);
    }
    
    addTransactionOwedByUser(newTransaction: Transaction) {
        this.transactionOwed.push(newTransaction);
    }

    totalBalance() {
        let totalPaid = 0;
        let totalOwed = 0;
        // logic to work out money...
    }
}