import Observer from "./Observer";

export default class Observable {

    observers: Observer[];

    constructor() {
        this.observers = [];
    }

    register(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyAll(name: string, value: string): void {
        this.observers.forEach(observer => observer.update(name, value));
    }

}