export function poundsToPence(amount: string) {
    let amountInPence = parseInt(amount) * 100;
    return amountInPence 
}

export function penceToPounds(amount:number) {
    let amountInPounds = amount / 100;
    return amountInPounds;
}