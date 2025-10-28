import { expect } from 'chai';
import { Ship } from '../src/models/motorized/ship.js';

describe('Ship Class', (): void => {
    let ship: Ship;

    beforeEach((): void => {
        ship = new Ship('Titanic', 'Classic', 1912, 45, 'Diesel', 3000, 52310, 9);
    });

    it('should create Ship instance', (): void => {
        expect(ship).to.be.instanceOf(Ship);
    });

    it('should start ship engine', (): void => {
        expect((): void => ship.start()).to.not.throw();
    });

    it('should have unique dropAnchor() method for Ship', (): void => {
        expect(ship).to.respondTo('dropAnchor');
        expect((): void => ship.dropAnchor()).to.not.throw();
    });

    it('should call move() without error', (): void => {
        expect((): void => ship.move()).to.not.throw();
    });

    it('should call brake() without error', (): void => {
        expect((): void => ship.brake()).to.not.throw();
    });

    it('should call stop() without error', (): void => {
        expect((): void => ship.stop()).to.not.throw();
    });

    it('should inherit getInfo() from Transport', (): void => {
        expect((): void => ship.getInfo()).to.not.throw();
    });

    it('should implement IMovable interface', (): void => {
        expect(ship).to.respondTo('start');
        expect(ship).to.respondTo('move');
        expect(ship).to.respondTo('brake');
        expect(ship).to.respondTo('stop');
    });
});
