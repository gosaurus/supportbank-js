import { parseData } from "./utils/importData.js";
import { Bank } from "./class/bank.js";
import { User } from "./class/user.js";
import { Transaction } from "./class/transaction.js";
import { poundsToPence } from "./utils/moneyMath.js";

async function main() {
    const parsedData = await parseData();

    const supportbank = new Bank();

    for (var i = 1; i < 10; i++) {
        const transactionLine = parsedData[i].split(",");
        console.log(`tl = ${transactionLine})}`);
        
        // if User (TransactionPaidFrom) does not exist, create new instance of User and add to Bank
        if (!supportbank.userExists(supportbank.users, transactionLine[1])) {
            const newUser = new User(transactionLine[1]);
            supportbank.users.push(newUser);
        }
        // retrieve existing User from Bank
        const userThatPaid = supportbank.getUser(supportbank.users, transactionLine[1]);
        console.log(`User instance: ${userThatPaid.name}`);

        // create new instance of Transaction
        const newTransactionPaid = new Transaction(
            i + 1, //unique transactions to allow for duplicate-looking transactions
            transactionLine[0], //date
            transactionLine[1], //user FROM
            transactionLine[2], //user TO
            transactionLine[3], //narrative
            poundsToPence(transactionLine[4]) //amountInPence
        )

        // add new Transaction to Bank if not duplicated
        // add Transaction to user's transactionOwed list
        if (!userThatPaid.transactionPaidExists(newTransactionPaid)) {
        //    supportbank.transactions.push(newTransactionPaid);
           userThatPaid.addTransactionPaidFromUser(newTransactionPaid);
        }

        // if User (TransactionPaidFrom) does not exist, create new instance of User and add to Bank
        if (!supportbank.userExists(supportbank.users, transactionLine[2])) {
            const newUser = new User(transactionLine[2]);
            supportbank.users.push(newUser);
        }
        // retrieve existing User from Bank
        const userThatOwes = supportbank.getUser(supportbank.users, transactionLine[2]);
        console.log(`User instance: ${userThatOwes.name}`);

        // create new instance of Transaction
        const newTransactionOwed = new Transaction(
            i + 1, //unique transactions to allow for duplicate-looking transactions
            transactionLine[0], //date
            transactionLine[1], //user FROM
            transactionLine[2], //user TO
            transactionLine[3], //narrative
            poundsToPence(transactionLine[4]) //amountInPence
        )

        // add new Transaction to Bank if not duplicated
        // add Transaction to user's transactionOwed list
        if (!userThatOwes.transactionPaidExists(newTransactionOwed)) {
        //    supportbank.transactions.push(newTransactionOwed);
           userThatOwes.addTransactionPaidFromUser(newTransactionOwed);
        }


    }


}

console.log("Calling main() from index.ts")
 main();