import { IMovable } from '../interfaces/i-movable';

export function operateTransport(vehicle: IMovable): void {
    vehicle.start();
    vehicle.move();
    vehicle.brake();
    vehicle.stop();
}
