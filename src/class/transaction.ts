export class Transaction {
    date: string;
    amountFrom: string;
    amountTo: string;
    amount: number;
    narrative: string;

    constructor(
        date: string,
        amountFrom: string,
        amountTo: string,
        narrative: string,
        amount: number,
    ) {
        this.date = date; 
        this.amountFrom = amountFrom;
        this.amountTo = amountTo;
        this.narrative = narrative;
        this.amount = amount;
    }

    // toString
}