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

    public ringBell(): string {
        let message: string;
        if (this.hasBell) {
            message = `${this.brand} ${this.model} rings: Ding ding!`;
        } else {
            message = `${this.brand} ${this.model} has no bell.`;
        }
        console.log(message);
        return message;
    }
}
