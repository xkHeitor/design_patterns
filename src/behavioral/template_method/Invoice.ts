import Item from './Item';
import TaxItem from './TaxItem';
export default class Invoice {

    items: Item[];

    constructor() {
        this.items = [];
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    getTaxes(): number{
        let total = 0;
        for(const item of this.items) {
            if (item instanceof TaxItem) total += item.calculateTax();
        }
        return total;
    }

}