import { expect } from 'chai';
import { Car } from '../src/models/motorized/car.js';

describe('Car Class', (): void => {
    let car: Car;

    beforeEach((): void => {
        car = new Car('Toyota', 'Corolla', 2020, 180, 'Petrol', 5, 1300);
    });

    it('should create Car instance', (): void => {
        expect(car).to.be.instanceOf(Car);
    });

    it('should call start() without throwing error', (): void => {
        expect((): void => car.start()).to.not.throw();
    });

    it('should have move() method as function', (): void => {
        expect(car.move).to.be.a('function');
    });

    it('should call brake() without error', (): void => {
        expect((): void => car.brake()).to.not.throw();
    });

    it('should call stop() without error', (): void => {
        expect((): void => car.stop()).to.not.throw();
    });

    it('should have unique honk() method for Car', (): void => {
        expect(car).to.respondTo('honk');
        expect((): void => car.honk()).to.not.throw();
    });

    it('should inherit getInfo() from Transport', (): void => {
        expect((): void => car.getInfo()).to.not.throw();
    });

    it('should implement all IMovable methods', (): void => {
        expect(car).to.respondTo('start');
        expect(car).to.respondTo('move');
        expect(car).to.respondTo('brake');
        expect(car).to.respondTo('stop');
    });
});
