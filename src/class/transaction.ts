export class Transaction {
    id: number;
    date: string;
    amountFrom: string;
    amountTo: string;
    narrative: string;
    amount: number;

    constructor(
        id: number,
        date: string,
        amountFrom: string,
        amountTo: string,
        narrative: string,
        amount: number,
    ) {
        this.id = id;
        this.date = date; 
        this.amountFrom = amountFrom;
        this.amountTo = amountTo;
        this.narrative = narrative;
        this.amount = amount;
    }

    // toString
}