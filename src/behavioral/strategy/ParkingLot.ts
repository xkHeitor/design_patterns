import Ticket from "../../../test/behavioral/strategy/TIcket";
import TicketCalculator from '../../../test/behavioral/strategy/TicketCalculator';

export default class ParkingLot {

    parkedCars: { plate: string, checkinDate: Date }[];

    constructor(readonly capacity: number, readonly ticketCalculator: TicketCalculator){
        this.parkedCars = [];
    }

    checkin(plate: string, checkinDate: Date): void {
        this.parkedCars.push({ plate, checkinDate });
    }

    checkout(plate: string): void {
        const positionParkedCar = this.parkedCars.findIndex(car => car.plate == plate);
        if(positionParkedCar == -1) throw new Error("Car not found");
        this.parkedCars.splice(positionParkedCar, 1);
    }

    calculateTicket(plate: string, checkoutDate: Date): Ticket {
        const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate == plate);
        if(!parkedCar) throw new Error("Car not found");
        const price = this.ticketCalculator.calculate(parkedCar.checkinDate, checkoutDate);
        return { price };
    }

    getEmptySpaces(): number {
        return this.capacity - this.parkedCars?.length;
    }

}