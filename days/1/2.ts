import { inputFile } from "../../util";

export default async function() {
    const input = inputFile(1);

    const rows = input.split("\n");
    const col1: number[] = [];
    const col2: number[] = [];

    for (const row of rows) {
        const values = row.split("   ");

        col1.push(parseInt(values[0]));
        col2.push(parseInt(values[1]));
    }

    col1.sort((a, b) => a - b);
    col2.sort((a, b) => a - b);

    console.log(col1.length, col2.length);

    let sum = 0;
    for (const val of col1) {
        const filtered = col2.filter(other => val === other);
        sum += val * filtered.length;
    }

    return sum;
}