import Observable from "./Observable";

export default class InputText extends Observable {

    private value: string;

    constructor(readonly name: string) {
        super();
        this.value = "";
    }

    getValue(): string {
        return this.value;
    }

    setValue(value: string): void {
        this.value = value;
        this.notifyAll(this.name, value);
    }

}