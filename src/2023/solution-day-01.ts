const findFirstAndLastNumber = (input: string, pattern: RegExp) => {
    const rIterator = input.matchAll(pattern)
    const r = Array.from(rIterator);
    return [r[0][1], r.at(-1)![1]];
}

export function solvePuzzle01(input: string[]): number {
    return input.map((inputLine) => {
        const [firstDigit, lastDigit] = findFirstAndLastNumber(inputLine, /(\d)/g)
        return parseInt(`${firstDigit}${lastDigit}`)
    }).reduce((tot, num) => tot + num, 0)
}

export function solvePuzzle02(input: string[]): number {
    return input.map((inputLine) => {
        const n = parseLineP02(inputLine)
        return n;
    }).reduce((tot, num) => {
        return tot + num
    }, 0)
}

export function parseLineP02(line: string): number {
    const [firstNumber, lastNumber] = findFirstAndLastNumber(line, /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gi)
    if (!firstNumber || ! lastNumber) throw new Error(`error with line ${line}`)
    return parseInt(`${toNumber(firstNumber)}${toNumber(lastNumber)}`)
}

const toNumber = (value: string) => {
    switch (value) {
        case 'one':
            return 1
        case 'two':
            return 2
        case 'three':
            return 3
        case 'four':
            return 4
        case 'five':
            return 5
        case 'six':
            return 6
        case 'seven':
            return 7
        case 'eight':
            return 8
        case 'nine':
            return 9
        default:
            const asInt = parseInt(value)
            if (!asInt) throw new Error(`${value} is not what it is expected`)
            return asInt;
    }
}