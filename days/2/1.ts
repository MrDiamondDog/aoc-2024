import { inputFile } from "../../util";

export default async function() {
    const input = inputFile(2);
    const reports = input.split("\n").map(row => row.split(" ").map(val => parseInt(val.trim())));

    let sum = 0;
    for (let report of reports) {
        let initialDir = report[0] > report[1] ? -1 : 1;
        let valid = true;

        for (let i = 0; i < report.length - 1; i++) {
            const diff = report[i + 1] - report[i];
            // console.log(report[i], report[i + 1], diff);

            if (diff < 0 && initialDir === 1) {
                valid = false;
                break;
            }

            if (diff > 0 && initialDir === -1) {
                valid = false;
                break;
            }

            if (Math.abs(diff) > 3) {
                valid = false;
                break;
            }

            if (Math.abs(diff) < 1) {
                valid = false;
                break;
            }
        }

        if (valid) sum++;

        // console.log(report, valid);
    }

    return sum;
}