export abstract class Transport {
    public constructor(
        public readonly brand: string,
        public readonly model: string,
        public readonly year: number,
        public readonly maxSpeed: number,
        public readonly fuelType: string | null,
        public readonly capacity: number,
        public readonly weight: number
    ) {}

    public start(): void {
        console.log(`${this.brand} ${this.model} started.`);
    }

    public stop(): void {
        console.log(`${this.brand} ${this.model} stopped.`);
    }

    public move(): void {
        console.log(`${this.brand} ${this.model} is moving at ${this.maxSpeed / 2} km/h.`);
    }

    public brake(): void {
        console.log(`${this.brand} ${this.model} is braking smoothly.`);
    }

    public getInfo(): void {
        console.log(`
        --- TRANSPORT INFO ---
        Brand: ${this.brand}
        Model: ${this.model}
        Year: ${this.year}
        Max Speed: ${this.maxSpeed} km/h
        Fuel Type: ${this.fuelType ?? 'None'}
        Capacity: ${this.capacity}
        Weight: ${this.weight} kg
        -----------------------
        `);
    }
}
