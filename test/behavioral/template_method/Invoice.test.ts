import Beer from '../../../src/behavioral/template_method/Beer';
import Invoice from '../../../src/behavioral/template_method/Invoice';
import Whisky from '../../../src/behavioral/template_method/Whisky';
import Water from '../../../src/behavioral/template_method/Water';
import Eletronic from '../../../src/behavioral/template_method/Electronic';
describe("Invoice", () => {

    it("should create a invoice", () => {
        const invoice = new Invoice();
        invoice.addItem(new Beer("Heneken", 10));
        invoice.addItem(new Whisky("Jack Daniels", 100));
        invoice.addItem(new Water("SC", 10));
        invoice.addItem(new Eletronic("Nootbook", 3000));
        const taxes = invoice.getTaxes();
        expect(taxes).toBe(921);
    });

});