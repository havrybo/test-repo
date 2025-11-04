import { describe, it, expect, vi, beforeEach, afterEach, MockInstance } from 'vitest';
import { Car } from '../models/motorized/car';
import { Plane } from '../models/motorized/plane';
import { Ship } from '../models/motorized/ship';
import { Bike } from '../models/non-motorized/bike';

describe('TEST 1: Mock Car.start() method', (): void => {
    it('start() method should be called 1 time', (): void => {
        const car = new Car('Toyota', 'Corolla', 2020, 180, 'Petrol', 5, 1300);
        const startSpy = vi.spyOn(car, 'start');
        car.start();
        expect(startSpy).toHaveBeenCalledTimes(1);
        startSpy.mockRestore();
    });
});

describe('TEST 2: Replace start() method result', (): void => {
    it('start() should return fake value', (): void => {
        const car = new Car('BMW', 'X5', 2023, 250, 'Diesel', 5, 2000);
        const startMock = vi.spyOn(car, 'start').mockReturnValue('FAKE ENGINE START!');
        const result = car.start();
        expect(result).toBe('FAKE ENGINE START!');
        expect(startMock).toHaveBeenCalled();
        startMock.mockRestore();
    });
});

describe('TEST 3: Mock console.log during honk()', (): void => {
    let consoleLogSpy: MockInstance<typeof console.log>;

    beforeEach((): void => {
        consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(vi.fn());
    });

    afterEach((): void => {
        consoleLogSpy.mockRestore();
    });

    it('console.log should be called with correct text', (): void => {
        const car = new Car('Tesla', 'Model 3', 2024, 261, 'Electric', 5, 1800);
        car.honk();
        expect(consoleLogSpy).toHaveBeenCalledWith('Tesla Model 3 honks: Beep Beep!');
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });
});

describe('TEST 4: Mock Plane.takeOff() method', (): void => {
    it('takeOff() should be called and return text', (): void => {
        const plane = new Plane('Boeing', '747', 2015, 900, 'Jet Fuel', 416, 183500, 60);
        const takeOffSpy = vi.spyOn(plane, 'takeOff');
        const result = plane.takeOff();
        expect(takeOffSpy).toHaveBeenCalledTimes(1);
        expect(result).toContain('taking off');
        expect(result).toContain('60');
        takeOffSpy.mockRestore();
    });
});

describe('TEST 5: Mock multiple Ship methods', (): void => {
    it('start() and dropAnchor() should be called', (): void => {
        const ship = new Ship('Titanic', 'Classic', 1912, 45, 'Diesel', 3000, 52310, 9);
        const startSpy = vi.spyOn(ship, 'start');
        const anchorSpy = vi.spyOn(ship, 'dropAnchor');
        ship.start();
        ship.dropAnchor();
        expect(startSpy).toHaveBeenCalledTimes(1);
        expect(anchorSpy).toHaveBeenCalledTimes(1);
        startSpy.mockRestore();
        anchorSpy.mockRestore();
    });
});

describe('BONUS TEST 6: Mock Bike.ringBell() with condition', (): void => {
    it('bike WITH bell should ring', (): void => {
        const bike = new Bike('Trek', 'FX 3', 2022, 35, 1, 12, true);
        const result = bike.ringBell();
        expect(result).toBe('Trek FX 3 rings: Ding ding!');
    });

    it('bike WITHOUT bell should not ring', (): void => {
        const bike = new Bike('Mountain', 'Pro', 2023, 45, 1, 15, false);
        const result = bike.ringBell();
        expect(result).toBe('Mountain Pro has no bell.');
    });
});

describe('BONUS TEST 7: Mock operateTransport function', (): void => {
    it('function should be called with correct object', (): void => {
        const car = new Car('Ford', 'Mustang', 2022, 250, 'Petrol', 4, 1700);
        const operateMock = vi.fn();
        operateMock(car);
        expect(operateMock).toHaveBeenCalledWith(car);
        expect(operateMock).toHaveBeenCalledTimes(1);
    });
});
