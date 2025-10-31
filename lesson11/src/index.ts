import { Car } from './models/motorized/car';
import { Plane } from './models/motorized/plane';
import { Ship } from './models/motorized/ship';
import { Bike } from './models/non-motorized/bike';
import { operateTransport } from './utils/transport-utils';

const motorizedVehicles = [
    new Car('Toyota', 'Corolla', 2020, 180, 'Petrol', 5, 1300),
    new Plane('Boeing', '747', 2015, 900, 'Jet Fuel', 416, 183500, 60),
    new Ship('Titanic', 'Classic', 1912, 45, 'Diesel', 3000, 52310, 9)
];

const nonMotorizedVehicles = [
    new Bike('Trek', 'FX 3', 2022, 35, 1, 12, true)
];

console.log('\n===== MOTORIZED TRANSPORT =====');
for (const vehicle of motorizedVehicles) {
    vehicle.getInfo();
    operateTransport(vehicle);

    if (vehicle instanceof Car) vehicle.honk();
    if (vehicle instanceof Plane) vehicle.takeOff();
    if (vehicle instanceof Ship) vehicle.dropAnchor();
}

console.log('\n===== NON-MOTORIZED TRANSPORT =====');
for (const vehicle of nonMotorizedVehicles) {
    vehicle.getInfo();
    operateTransport(vehicle);
    if (vehicle instanceof Bike) vehicle.ringBell();
}
