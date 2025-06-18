import { promises as fs } from "fs";
import * as path from "path";


async function readInput(): Promise<any> {
    const filePath = path.join(__dirname, "../Transactions2014.csv");
    console.log(filePath);
    const data = await fs.readFile(filePath, "utf-8");
    if (!data || data.trim().length === 0) {
        throw new Error(`Error: no input found or error reading file.`)
    } 
    return data;
};

async function parseData(): Promise<string[]> {
    let transactionsList: string[] = [];
    const transactionData = await readInput();
    return transactionsList = transactionData.split("\n");
}

async function main() {
    const parsedData = await parseData();
    parsedData.forEach((transaction: string) => 
        console.log(transaction)
    );
}

main();
