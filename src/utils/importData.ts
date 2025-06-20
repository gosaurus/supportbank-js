import { promises as fs } from "fs";
import * as path from "path";

export async function readInput(): Promise<any> {
    const filePath = path.join(__dirname, "../../Transactions2014.csv");
    console.log(filePath);
    const data = await fs.readFile(filePath, "utf-8");
    if (!data || data.trim().length === 0) {
        throw new Error(`Error: no input found or error reading file.`)
    } 
    return data;
};

export async function parseData(): Promise<string[]> {
    let transactionsList: string[] = [];
    const transactionData = await readInput();
    transactionsList = transactionData.split("\n");
    console.log(`Testing transactionsList... for item is ${transactionsList[1]}`);
    return transactionsList;
}
