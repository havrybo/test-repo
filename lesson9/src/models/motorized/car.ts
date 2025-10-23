import { MotorTransport } from './motor-transport';

export class Car extends MotorTransport {
    public constructor(
        brand: string,
        model: string,
        year: number,
        maxSpeed: number,
        fuelType: string,
        capacity: number,
        weight: number
    ) {
        super(brand, model, year, maxSpeed, fuelType, capacity, weight);
    }

    public start(): void {
        console.log(`${this.brand} ${this.model} engine started. Fuel type: ${this.fuelType}.`);
    }

    public honk(): void {
        console.log(`${this.brand} ${this.model} honks: Beep Beep!`);
    }
}
