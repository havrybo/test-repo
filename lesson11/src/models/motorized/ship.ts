import { MotorTransport } from './motor-transport';

export class Ship extends MotorTransport {
    public constructor(
        brand: string,
        model: string,
        year: number,
        maxSpeed: number,
        fuelType: string,
        capacity: number,
        weight: number,
        private readonly decks: number
    ) {
        super(brand, model, year, maxSpeed, fuelType, capacity, weight);
    }

    public start(): string {
        const message = `${this.brand} ${this.model} engine started. Fuel type: ${this.fuelType}.`;
        console.log(message);
        return message;
    }

    public dropAnchor(): string {
        const message = `${this.brand} ${this.model} dropped anchor with ${this.decks} decks.`;
        console.log(message);
        return message;
    }
}
