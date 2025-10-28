import { expect } from 'chai';
import { Plane } from '../src/models/motorized/plane.js';

describe('Plane Class', (): void => {
    let plane: Plane;

    beforeEach((): void => {
        plane = new Plane('Boeing', '747', 2015, 900, 'Jet Fuel', 416, 183500, 60);
    });

    it('should create Plane instance', (): void => {
        expect(plane).to.be.instanceOf(Plane);
    });

    it('should start plane engines', (): void => {
        expect((): void => plane.start()).to.not.throw();
    });

    it('should have unique takeOff() method for Plane', (): void => {
        expect(plane).to.respondTo('takeOff');
        expect((): void => plane.takeOff()).to.not.throw();
    });

    it('should call move() without error', (): void => {
        expect((): void => plane.move()).to.not.throw();
    });

    it('should call brake() without error', (): void => {
        expect((): void => plane.brake()).to.not.throw();
    });

    it('should call stop() without error', (): void => {
        expect((): void => plane.stop()).to.not.throw();
    });

    it('should inherit getInfo() from Transport', (): void => {
        expect((): void => plane.getInfo()).to.not.throw();
    });

    it('should implement IMovable interface', (): void => {
        expect(plane).to.respondTo('start');
        expect(plane).to.respondTo('move');
        expect(plane).to.respondTo('brake');
        expect(plane).to.respondTo('stop');
    });
});
