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
        console.log(`tl = ${transactionLine}, ${typeof(transactionLine)}`);
        
        
        // if User does not exist, create new instance of User and add to Bank
        if (!supportbank.userExists(supportbank.users, transactionLine[1])) {
            const newUser = new User(transactionLine[1]);
            supportbank.users.push(newUser);
        }
        // retrieve existing User from Bank
        const userInstance = supportbank.getUser(supportbank.users, transactionLine[1]);

        // create new instance of Transaction
        const newTransaction = new Transaction(
            i + 1, //unique transactions to allow for duplicate-looking transactions
            transactionLine[0], //date
            transactionLine[1], //user FROM
            transactionLine[2], //user TO
            transactionLine[3], //narrative
            poundsToPence(transactionLine[4]) //amountInPence
        )

        // add new Transaction to Bank if not duplicated
        // add Transaction to user's transactionOwed list
        if (!supportbank.transactionExists(supportbank.transactions, newTransaction)) {
           supportbank.transactions.push(newTransaction);
           userInstance.addTransactionOwedByUser(newTransaction);
        }


    }


}

console.log("Calling main() from index.ts")
 main();