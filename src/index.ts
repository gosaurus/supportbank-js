import { parseData } from "./utils/importData.js";
import { Bank } from "./class/bank.js";
import { User } from "./class/user.js";
import { Transaction } from "./class/transaction.js";
import { poundsToPence } from "./utils/moneyMath.js";

async function main() {
    const parsedData = await parseData();
    console.log(`testing parsedData worked: ${parsedData[3]}`);
    const supportbank = new Bank();

    for (var i = 1; i < 10; i++) {
        const transactionLine = parsedData[i].split(",");
        console.log(`tl = ${transactionLine}`);
        
        //create user if new
        if (!supportbank.userExists(supportbank.users, transactionLine[1])) {
            console.log(`checking tl[1] = ${transactionLine[1]}, tl2 = ${transactionLine[2]}`)
            const newUser = new User(transactionLine[1]);
            newUser.toString();
            supportbank.users.push(newUser);
        }

        //
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