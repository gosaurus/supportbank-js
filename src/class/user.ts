import { Transaction } from "./transaction.js";

export class User {
    name: string;
    transactionsPaid: Transaction[];
    transactionsOwed: Transaction[];

    constructor(
        name: string,
    ) {
        this.name = name;
        this.transactionsPaid = [];
        this.transactionsOwed = [];
    }

    toString() {
        console.log(`User ${this.name} created`);
    }

    addTransactionPaidFromUser(newTransaction: Transaction) {
        this.transactionsPaid.push(newTransaction);
    }
    
    addTransactionOwedByUser(newTransaction: Transaction) {
        this.transactionsOwed.push(newTransaction);
    }

    totalBalance() {
        let totalPaid = 0;
        let totalOwed = 0;
        // logic to work out money...
    }
    
    transactionPaidExists(newTransaction: Transaction, ): boolean {
        for (const transaction of this.transactionsPaid) {
                if (transaction === newTransaction)
                    return true;
            }
        return false;
    }

    transactionOwedExists(newTransaction: Transaction, transactionsOwed: Transaction[]): boolean {
        for (const transaction of transactionsOwed) {
                if (transaction === newTransaction)
                    return true;
            }
        return false;
    }
}