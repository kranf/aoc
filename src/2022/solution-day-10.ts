export function solvePuzzle01(input: string[]): number {
    let numberOfSamples = 6
    const initialCycle = 19
    const samplingPeriod = 40

    const processor = new Processor(input)

    let cycleNumber = initialCycle;
    let res = 0
    while(numberOfSamples>0) {
        processor.process(cycleNumber);
        res += processor.registerX * (processor.cycleNumber + 1);
        console.log(`Cycle number ${processor.cycleNumber} - X is ${processor.registerX} at index ${processor.inputIndex}. Ongoing command: ${processor.commandProcessing}`);
        
        cycleNumber = samplingPeriod
        numberOfSamples--
    }

    return res
}

export function solvePuzzle02(input: string[]): string[][] {
    let numberOfLines = 6
    const numberOfPixelsPerLine = 40

    const processor = new Processor(input)

    let res = [[]] as string[][]
    for (let lineNumber = 0; lineNumber < numberOfLines; lineNumber++) {
        res[lineNumber] = []
        const currentLine = res[lineNumber];
        for (let index = 0; index < numberOfPixelsPerLine; index++) {
            currentLine[index] = index >= processor.registerX-1 && index <= processor.registerX+1 ? '#' : '.'
            processor.process()
        }
    }

    return res
}



export class Processor {
    private inputStack: string[];
    public inputIndex: number = 0
    public registerX: number = 1;
    public cycleNumber: number = 0;
    public commandProcessing: boolean = false;
    private valueToAddNext: number = 0;

    constructor(input: string[]) {
        this.inputStack = input.reverse();
    }

    process(numberOfCycle: number = 1): void {
        let counter = numberOfCycle
        while (counter !== 0) {
            this.processNext()
            counter--;
        }

    } 

    public isDone(): boolean {
        return this.inputStack.length === 0;
    }

    private processNext(): void {
        this.cycleNumber++;
        if (this.commandProcessing) {
            this.registerX += this.valueToAddNext;
            this.valueToAddNext = 0;
            this.commandProcessing = false;
            return;
        }

        const command = this.getNextInput()
        if (command === 'noop') {
            return;
        }
        if (command?.startsWith('addx')) {
            this.valueToAddNext = Number(command.split(' ')[1]);   
            this.commandProcessing= true; 
            return;
        }
    }

    private getNextInput(): string|undefined {
        this.inputIndex++;
        return this.inputStack.pop();
    }
}