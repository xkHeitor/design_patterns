import TicketCalculator from './TicketCalculator';
export default class AirportTicketCalculator implements TicketCalculator {

    calculate(checkinDate: Date, checkoutDate: Date): number {
        const period = (checkoutDate.getTime() - checkinDate.getTime())/(1e3*60*60);
        const pricePerHour = 10;
        return period * 10;
    }

}