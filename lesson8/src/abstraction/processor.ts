export abstract class Processor<TInput, TOutput> {
    public abstract process(input: TInput): TOutput;
}
