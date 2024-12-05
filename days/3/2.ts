import { inputFile } from "../../util";

const mulRe = /(mul|do|don't)\(((\d*),(\d*))?\)/g

export default async function() {
    const input = inputFile(3);

    const matches = input.matchAll(mulRe);

    let sum = 0;
    let enabled = true;
    for (const match of matches) {
        if (match[1] === "do") enabled = true;
        if (match[1] === "don't") enabled = false;

        if (match[1] !== "mul") continue;
        if (!enabled) continue;

        sum += parseInt(match[3]) * parseInt(match[4]);
    }

    return sum;
}