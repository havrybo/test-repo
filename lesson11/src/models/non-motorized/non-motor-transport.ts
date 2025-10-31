import { Transport } from '../../models/transport';
import { IMovable } from '../../interfaces/i-movable';

export abstract class NonMotorTransport extends Transport implements IMovable {
    public constructor(
        brand: string,
        model: string,
        year: number,
        maxSpeed: number,
        capacity: number,
        weight: number
    ) {
        super(brand, model, year, maxSpeed, null, capacity, weight);
    }

    public start(): void {
        console.log(`${this.brand} ${this.model} is ready to pedal.`);
    }

    public move(): void {
        console.log(`${this.brand} ${this.model} is moving at ${this.maxSpeed / 2} km/h.`);
    }

    public brake(): void {
        console.log(`${this.brand} ${this.model} is braking smoothly.`);
    }

    public stop(): void {
        console.log(`${this.brand} ${this.model} stopped completely.`);
    }
}
