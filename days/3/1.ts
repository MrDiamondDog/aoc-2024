import { inputFile } from "../../util";

const mulRe = /mul\((\d*),(\d*)\)/g

export default async function() {
    const input = inputFile(3);

    const matches = input.matchAll(mulRe);

    let sum = 0;
    for (const match of matches) {
        sum += parseInt(match[1]) * parseInt(match[2]);
    }

    return sum;
}