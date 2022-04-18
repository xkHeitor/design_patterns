import Participant from "./Participant";

export default class Channel {

    private participants: Participant[];

    constructor(){
        this.participants = [];
    }

    register(participants: Participant[]): void {
        this.participants.push(...participants);
    }

    send(participant: Participant, message: string): void {
        this.participants.forEach(toParticipant => {
            if(toParticipant.name === participant.name) return;
            toParticipant.receive(participant, message);
        });
    }
}