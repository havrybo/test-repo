import { describe, it, expect, beforeEach, vi } from 'vitest';
import { expect as chaiExpect } from 'chai';
import { operateTransport } from '../src/utils/transport-utils.js';
import { Car } from '../src/models/motorized/car.js';
import { Plane } from '../src/models/motorized/plane.js';
import { Ship } from '../src/models/motorized/ship.js';
import { Bike } from '../src/models/non-motorized/bike.js';
import { IMovable } from '../src/interfaces/i-movable.js';

describe('operateTransport Function', (): void => {
    let car: Car;
    let plane: Plane;
    let ship: Ship;
    let bike: Bike;

    beforeEach((): void => {
        car = new Car('Toyota', 'Corolla', 2020, 180, 'Petrol', 5, 1300);
        plane = new Plane('Boeing', '747', 2015, 900, 'Jet Fuel', 416, 183500, 60);
        ship = new Ship('Titanic', 'Classic', 1912, 45, 'Diesel', 3000, 52310, 9);
        bike = new Bike('Trek', 'FX 3', 2022, 35, 1, 12, true);
    });

    describe('with Car object', (): void => {
        it('should call function without errors (Vitest)', (): void => {
            expect((): void => operateTransport(car)).not.toThrow();
        });

        it('should call function without errors (Chai)', (): void => {
            chaiExpect((): void => operateTransport(car)).to.not.throw();
        });

        it('should call all IMovable methods (Vitest spy)', (): void => {
            const mockCar = {
                start: vi.fn(),
                move: vi.fn(),
                brake: vi.fn(),
                stop: vi.fn()
            };

            operateTransport(mockCar);

            expect(mockCar.start).toHaveBeenCalledOnce();
            expect(mockCar.move).toHaveBeenCalledOnce();
            expect(mockCar.brake).toHaveBeenCalledOnce();
            expect(mockCar.stop).toHaveBeenCalledOnce();
        });
    });

    describe('with Plane object', (): void => {
        it('should call function without errors (Vitest)', (): void => {
            expect((): void => operateTransport(plane)).not.toThrow();
        });

        it('should call function without errors (Chai)', (): void => {
            chaiExpect((): void => operateTransport(plane)).to.not.throw();
        });
    });

    describe('with Ship object', (): void => {
        it('should call function without errors (Vitest)', (): void => {
            expect((): void => operateTransport(ship)).not.toThrow();
        });

        it('should call function without errors (Chai)', (): void => {
            chaiExpect((): void => operateTransport(ship)).to.not.throw();
        });
    });

    describe('with Bike object', (): void => {
        it('should call function without errors (Vitest)', (): void => {
            expect((): void => operateTransport(bike)).not.toThrow();
        });

        it('should call function without errors (Chai)', (): void => {
            chaiExpect((): void => operateTransport(bike)).to.not.throw();
        });
    });

    describe('method execution order', (): void => {
        it('should call methods in correct order (Vitest)', (): void => {
            const callOrder: string[] = [];

            const mockVehicle: IMovable = {
                start: (): void => {
                    callOrder.push('start');
                },
                move: (): void => {
                    callOrder.push('move');
                },
                brake: (): void => {
                    callOrder.push('brake');
                },
                stop: (): void => {
                    callOrder.push('stop');
                }
            };

            operateTransport(mockVehicle);

            expect(callOrder).toEqual(['start', 'move', 'brake', 'stop']);
        });

        it('should call methods in correct order (Chai)', (): void => {
            const callOrder: string[] = [];

            const mockVehicle: IMovable = {
                start: (): void => {
                    callOrder.push('start');
                },
                move: (): void => {
                    callOrder.push('move');
                },
                brake: (): void => {
                    callOrder.push('brake');
                },
                stop: (): void => {
                    callOrder.push('stop');
                }
            };

            operateTransport(mockVehicle);

            chaiExpect(callOrder).to.have.lengthOf(4);
            chaiExpect(callOrder[0]).to.equal('start');
            chaiExpect(callOrder[1]).to.equal('move');
            chaiExpect(callOrder[2]).to.equal('brake');
            chaiExpect(callOrder[3]).to.equal('stop');
        });

        it('should start with start() and end with stop() (Chai)', (): void => {
            const callOrder: string[] = [];

            const mockVehicle: IMovable = {
                start: (): void => {
                    callOrder.push('start');
                },
                move: (): void => {
                    callOrder.push('move');
                },
                brake: (): void => {
                    callOrder.push('brake');
                },
                stop: (): void => {
                    callOrder.push('stop');
                }
            };

            operateTransport(mockVehicle);

            chaiExpect(callOrder[0]).to.equal('start');
            chaiExpect(callOrder[callOrder.length - 1]).to.equal('stop');
        });
    });

    describe('with different transport types', (): void => {
        it('should work with all transport types (Vitest)', (): void => {
            const vehicles = [car, plane, ship, bike];

            vehicles.forEach((vehicle): void => {
                expect((): void => operateTransport(vehicle)).not.toThrow();
            });
        });

        it('should work with all transport types (Chai)', (): void => {
            const vehicles = [car, plane, ship, bike];

            chaiExpect(vehicles).to.have.lengthOf(4);

            vehicles.forEach((vehicle): void => {
                chaiExpect((): void => operateTransport(vehicle)).to.not.throw();
            });
        });
    });

    describe('with custom IMovable object', (): void => {
        it('should accept any object implementing IMovable (Vitest)', (): void => {
            const customVehicle = {
                start: vi.fn(),
                move: vi.fn(),
                brake: vi.fn(),
                stop: vi.fn()
            };

            expect((): void => operateTransport(customVehicle)).not.toThrow();
        });

        it('should accept any object implementing IMovable (Chai)', (): void => {
            const customVehicle = {
                start: vi.fn(),
                move: vi.fn(),
                brake: vi.fn(),
                stop: vi.fn()
            };

            chaiExpect((): void => operateTransport(customVehicle)).to.not.throw();
        });
    });

    describe('method call verification with spy', (): void => {
        it('should call each method exactly once (Vitest)', (): void => {
            const spyVehicle = {
                start: vi.fn(),
                move: vi.fn(),
                brake: vi.fn(),
                stop: vi.fn()
            };

            operateTransport(spyVehicle);

            expect(spyVehicle.start).toHaveBeenCalledTimes(1);
            expect(spyVehicle.move).toHaveBeenCalledTimes(1);
            expect(spyVehicle.brake).toHaveBeenCalledTimes(1);
            expect(spyVehicle.stop).toHaveBeenCalledTimes(1);
        });

        it('should not call methods more than once (Vitest)', (): void => {
            const spyVehicle = {
                start: vi.fn(),
                move: vi.fn(),
                brake: vi.fn(),
                stop: vi.fn()
            };

            operateTransport(spyVehicle);

            expect(spyVehicle.start).not.toHaveBeenCalledTimes(2);
            expect(spyVehicle.move).not.toHaveBeenCalledTimes(2);
        });

        it('should have all methods as functions (Chai)', (): void => {
            const spyVehicle = {
                start: vi.fn(),
                move: vi.fn(),
                brake: vi.fn(),
                stop: vi.fn()
            };

            operateTransport(spyVehicle);

            chaiExpect(spyVehicle.start).to.be.a('function');
            chaiExpect(spyVehicle.move).to.be.a('function');
            chaiExpect(spyVehicle.brake).to.be.a('function');
            chaiExpect(spyVehicle.stop).to.be.a('function');
        });
    });
});
