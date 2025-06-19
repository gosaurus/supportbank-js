import { parseData } from "./importData.js";
import { Bank } from "./class/bank.js";
import { User } from "./class/user.js";
import { Transaction } from "./class/transaction.js";
import { poundsToPence } from "./utils/moneyMath.js";

async function main() {
    const parsedData = await parseData();

    const supportbank = new Bank();

    for (var i = 0; i < parseData.length; i++) {
        const transactionLine = parsedData[i];
        console.log(transactionLine);

        if (!supportbank.users.includes(transactionLine[1])) {
            const newUser = new User(transactionLine[1])   
        }

        if (!supportbank.transactionIds.includes(i+1)) {
            const newTransaction = new Transaction(
                transactionLine[0],
                transactionLine[1],
                transactionLine[2],
                transactionLine[3],
                poundsToPence(transactionLine[4])
            )
        }
    }
}

console.log("Calling main() from index.ts")
main();