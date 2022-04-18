import Channel from "../../../src/behavioral/mediator/Channel";
import Participant from "../../../src/behavioral/mediator/Participant";

describe("Chat", () => {

    it("Should create a chat between participants", () => {
        const participantA = new Participant("A");
        const participantB = new Participant("B");
        const participantC = new Participant("C");
        participantB.receive(participantA, "hello");
        participantC.receive(participantA, "hello");
        expect(participantB.messages[0]).toBe("A: hello");
        expect(participantC.messages[0]).toBe("A: hello");
    });

    it("Should create a chat between participants indirectly", () => {
        const participantA = new Participant("A");
        const participantB = new Participant("B");
        const participantC = new Participant("C");
        const channel = new Channel();
        channel.register([ participantA, participantB, participantC ]);
        channel.send(participantA, "hello");
        expect(participantB.messages[0]).toBe("A: hello");
        expect(participantC.messages[0]).toBe("A: hello");
        channel.send(participantC, "Hi");
        expect(participantA.messages[0]).toBe("C: Hi");
        expect(participantB.messages[1]).toBe("C: Hi");
    });

});