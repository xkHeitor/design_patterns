export default class Account {

    private balance: number;

    constructor(readonly number: string){
        this.balance = 0;
    }

    getBalance(): number {
        return this.balance;
    }

    credit(amount: number): void {
        this.balance += amount;
    }

    debit(amount: number): void {
        this.balance -= amount;
    }

}