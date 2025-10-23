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

    public start(): void {
        console.log(`${this.brand} ${this.model} engine started. Fuel type: ${this.fuelType}.`);
    }

    public dropAnchor(): void {
        console.log(`${this.brand} ${this.model} dropped anchor with ${this.decks} decks.`);
    }
}
