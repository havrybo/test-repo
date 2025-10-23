import { Transport } from '../../models/transport';
import { IMovable } from '../../interfaces/i-movable';

export abstract class MotorTransport extends Transport implements IMovable {
    public abstract start(): void;

    public move(): void {
        console.log(`${this.brand} ${this.model} is moving at ${this.maxSpeed} km/h.`);
    }

    public brake(): void {
        console.log(`${this.brand} ${this.model} is braking smoothly.`);
    }

    public stop(): void {
        console.log(`${this.brand} ${this.model} stopped completely.`);
    }
}
