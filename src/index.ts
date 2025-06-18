import { promises as fs } from "fs";


async function readInput() : Promise<any> {
    try {
        const data = await fs.readFile("./Transactions2014.csv", "utf-8");
        console.log("File content: \n" + data);
        return data
        
    } catch (err) {
        console.log("Error reading file: ", err);
    }
};

const transactionsList: string[] = [];

async function parseTransactionData() {
    const transactionData = await readInput();
    transactionData.split("\n");

}

