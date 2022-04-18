export default class Participant {

    messages: string[];

    constructor(readonly name: string) {
        this.messages = [];
    }

    receive(participant: Participant, message: string): void { 
        this.messages.push(`${participant.name}: ${message}`);
    }

}