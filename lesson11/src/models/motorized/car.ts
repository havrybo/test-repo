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

    public start(): string {
        const message = `${this.brand} ${this.model} engine started. Fuel type: ${this.fuelType}.`;
        console.log(message);
        return message;
    }

    public honk(): string {
        const message = `${this.brand} ${this.model} honks: Beep Beep!`;
        console.log(message);
        return message;
    }
}
