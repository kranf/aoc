import { loadInputData } from '@src/common';
import { Processor, solvePuzzle01, solvePuzzle02 } from '@2022/solution-day-10'

test('puzzle01', () => {
    // const inputData = loadInputData('input-day-10.txt');
    const inputData = loadInputData('input-example-day-10.txt');
    expect(solvePuzzle01(inputData)).toBe(13140);
});

test('puzzle02', () => {
    const inputData = loadInputData('input-day-10.txt');

    const matrix = solvePuzzle02(inputData);
    console.log(matrix.map((line)=>line.join('')));
});

describe('Processor', () => {

    it('x should be 1 initially', () => {
        const processor = new Processor([]);
        expect(processor.registerX).toBe(1)
    });

    it('x should be 1 after noop', () => {
        const input = ['noop']
        const processor = new Processor(input);
        processor.process();
        expect(processor.registerX).toBe(1)
    });

    it('x should be 1 after noop', () => {
        const input = ['noop']
        const processor = new Processor(input);
        processor.process();
        expect(processor.registerX).toBe(1)
    });

    it('x should not be increased before the end of addx both cycles', () => {
        const input = ['addx 1']
        const processor = new Processor(input);
        processor.process();
        expect(processor.registerX).toBe(1)
        processor.process();
        expect(processor.registerX).toBe(2)
    });

    it('cycleNumber should be initially 0', () => {
        const input = []
        const processor = new Processor(input);
        expect(processor.cycleNumber).toBe(0)
    });

    it('cycleNumber should be increased by 1 after first operation', () => {
        const input = ['noop']
        const processor = new Processor(input);
        processor.process()
        expect(processor.cycleNumber).toBe(1)
    });

    it('cycleNumber should be increased by 2 after addx operation', () => {
        const input = ['addx 1']
        const processor = new Processor(input);
        processor.process(2)
        expect(processor.cycleNumber).toBe(2)
    });

    it('example', () => {
        const input = [
            'noop',
            'addx 3',
            'addx -5',
        ]
        const processor = new Processor(input);

        processor.process()
        expect(processor.cycleNumber).toBe(1)
        expect(processor.registerX).toBe(1)
        processor.process()
        expect(processor.cycleNumber).toBe(2)
        expect(processor.registerX).toBe(1)
        processor.process()
        expect(processor.cycleNumber).toBe(3)
        expect(processor.registerX).toBe(4)
        processor.process()
        expect(processor.cycleNumber).toBe(4)
        expect(processor.registerX).toBe(4)
        processor.process()
        expect(processor.cycleNumber).toBe(5)
        expect(processor.registerX).toBe(-1)

    });
});