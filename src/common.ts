import { readFileSync } from 'fs';
import path from 'path';

const RESOURCE_PATH = './resources';

export interface Coordinates {
    x: number;
    y: number;
}

export function loadInputData(resourceName: string, year: string = '2022'): string[] {
    const pathToResource = path.join(RESOURCE_PATH, year, resourceName);
    return readFileSync(pathToResource, {encoding:'utf-8'}).split(/\r?\n/);
}
