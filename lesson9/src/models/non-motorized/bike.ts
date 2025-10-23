import { NonMotorTransport } from './non-motor-transport';

export class Bike extends NonMotorTransport {
    public constructor(
        brand: string,
        model: string,
        year: number,
        maxSpeed: number,
        capacity: number,
        weight: number,
        private readonly hasBell: boolean
    ) {
        super(brand, model, year, maxSpeed, capacity, weight);
    }

    public ringBell(): void {
        if (this.hasBell) {
            console.log(`${this.brand} ${this.model} rings: Ding ding!`);
        } else {
            console.log(`${this.brand} ${this.model} has no bell.`);
        }
    }
}
