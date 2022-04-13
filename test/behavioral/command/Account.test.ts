import Account from "../../../src/behavioral/command/Account";
import CreditCommand from "../../../src/behavioral/command/CreditCommand";
import DebitCommand from "../../../src/behavioral/command/DebitCommand";

describe("Account", () => {

    it("Should create a bank account", async () => {
        const account = new Account("00147");
        const balance = account.getBalance();
        expect(balance).toBe(0);
    });

    it("Should credit an account", async () => {
        const account = new Account("00147");
        account.credit(100);
        const balance = account.getBalance();
        expect(balance).toBe(100);
    });

    it("Should debit an account", async () => {
        const account = new Account("00147");
        account.credit(100);
        account.debit(65);
        const balance = account.getBalance();
        expect(balance).toBe(35); 
    });

    it("Should credit an account using a command", async () => {
        const account = new Account("00147");
        const creditCommand = new CreditCommand(account, 100);
        creditCommand.execute();
        const balance = account.getBalance();
        expect(balance).toBe(100);
    });

    it("Should debit an account using a command", async () => {
        const account = new Account("00147");
        const creditCommand = new CreditCommand(account, 100);
        creditCommand.execute();
        const debitCommand = new DebitCommand(account, 75);
        debitCommand.execute();
        const balance = account.getBalance();
        expect(balance).toBe(25);
    });

});