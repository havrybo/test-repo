import { expect } from 'chai';
import { Bike } from '../src/models/non-motorized/bike.js';

describe('Bike Class', (): void => {
    let bikeWithBell: Bike;
    let bikeWithoutBell: Bike;

    beforeEach((): void => {
        bikeWithBell = new Bike('Trek', 'FX 3', 2022, 35, 1, 12, true);
        bikeWithoutBell = new Bike('Generic', 'Basic', 2021, 30, 1, 10, false);
    });

    it('should create Bike instance with bell', (): void => {
        expect(bikeWithBell).to.be.instanceOf(Bike);
    });

    it('should create Bike instance without bell', (): void => {
        expect(bikeWithoutBell).to.be.instanceOf(Bike);
    });

    it('should prepare bike for pedaling', (): void => {
        expect((): void => bikeWithBell.start()).to.not.throw();
    });

    it('should ring bell when bike has bell', (): void => {
        expect((): void => bikeWithBell.ringBell()).to.not.throw();
    });

    it('should handle absence of bell gracefully', (): void => {
        expect((): void => bikeWithoutBell.ringBell()).to.not.throw();
    });

    it('should call move() without error', (): void => {
        expect((): void => bikeWithBell.move()).to.not.throw();
    });

    it('should call brake() without error', (): void => {
        expect((): void => bikeWithBell.brake()).to.not.throw();
    });

    it('should call stop() without error', (): void => {
        expect((): void => bikeWithBell.stop()).to.not.throw();
    });

    it('should inherit getInfo() from Transport', (): void => {
        expect((): void => bikeWithBell.getInfo()).to.not.throw();
    });

    it('should implement IMovable interface', (): void => {
        expect(bikeWithBell).to.respondTo('start');
        expect(bikeWithBell).to.respondTo('move');
        expect(bikeWithBell).to.respondTo('brake');
        expect(bikeWithBell).to.respondTo('stop');
    });
});
