import ParkingLot from "../../../src/behavioral/strategy/ParkingLot";
import AirportTicketCalculator from "./AirportTicketCalculator";
import BeachTicketCalculator from "./BeachTicketCalculator";
import ShoppingTicketCalculator from "./ShoppingTicketCalculator";

describe("Strategy - ParkingLot", () => {

    const checkinDate = new Date("2022-01-01T10:00:00");
    const checkoutDate = new Date("2022-01-01T15:00:00");
    const plate = "ASD-0123"

    it("Should create a parking lot with 500 spaces", () => {
        const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
        expect(parkingLot.getEmptySpaces()).toBe(500);
    });
    
    it("Should enter one car", () => {
        const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
        parkingLot.checkin(plate, checkinDate);
        expect(parkingLot.getEmptySpaces()).toBe(499);
    });

    it("Should leave one car", () => {
        const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
        parkingLot.checkin(plate, checkinDate);
        parkingLot.checkout(plate);
        expect(parkingLot.getEmptySpaces()).toBe(500);
    });

    it("should calculate parking lot of beach", () => {
        const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
        parkingLot.checkin(plate, checkinDate);
        const ticket = parkingLot.calculateTicket(plate, checkoutDate);
        parkingLot.checkout(plate);
        expect(ticket.price).toBe(20);
    });

    it("should calculate the shopping parking, that the first 3 hours are 10 and then 10 per hour", () => {
        const parkingLot = new ParkingLot(500, new ShoppingTicketCalculator());
        parkingLot.checkin(plate, checkinDate);
        const ticket = parkingLot.calculateTicket(plate, checkoutDate);
        parkingLot.checkout(plate);
        expect(ticket.price).toBe(30);
    });

    it("should calculate the airport parking, that are 10 per hour", () => {
        const parkingLot = new ParkingLot(500, new AirportTicketCalculator());
        parkingLot.checkin(plate, checkinDate);
        const ticket = parkingLot.calculateTicket(plate, checkoutDate);
        parkingLot.checkout(plate);
        expect(ticket.price).toBe(50);
    });

});