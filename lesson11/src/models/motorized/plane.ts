import { MotorTransport } from './motor-transport';

export class Plane extends MotorTransport {
    public constructor(
        brand: string,
        model: string,
        year: number,
        maxSpeed: number,
        fuelType: string,
        capacity: number,
        weight: number,
        private readonly wingspan: number
    ) {
        super(brand, model, year, maxSpeed, fuelType, capacity, weight);
    }

    public start(): string {
        const message = `${this.brand} ${this.model} engines started. Fuel type: ${this.fuelType}.`;
        console.log(message);
        return message;
    }

    public takeOff(): string {
        const message = `${this.brand} ${this.model} is taking off with wingspan ${this.wingspan} meters.`;
        console.log(message);
        return message;
    }
}
