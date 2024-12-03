import { inputFile } from "../../util";

function validPair(initialDir: number, num1: number, num2: number) {
    const diff = num2 - num1;

    if (diff < 0 && initialDir === 1) return false;
    if (diff > 0 && initialDir === -1) return false;

    if (Math.abs(diff) > 3) return false;
    if (Math.abs(diff) < 1) return false;

    return true;
}

function validReport(report: number[]) {
    let initialDir = report[0] > report[1] ? -1 : 1;
    let valid = true;

    for (let i = 0; i < report.length; i++) {
        valid = validPair(initialDir, report[i], report[i + 1]);
        if (!valid) break;
    }

    return valid;
}

export default async function() {
    const input = inputFile(2);
    const reports = input.split("\n").map(row => row.split(" ").map(val => parseInt(val.trim())));

    let sum = 0;
    for (const report of reports) {
        if (!validReport(report)) {
            let valid = false;

            for (let i = 0; i < report.length; i++) {
                let newReport = [...report];
                newReport.splice(i, 1);
                if (validReport(newReport)) {
                    valid = true;
                    break;
                }
            }

            if (valid) sum++;
            console.log("2nd try:", report, valid);
        } else {
            console.log("1st try:", report, true);
            sum++;
        }

        // console.log(report, valid);
    }

    return sum;
}