import fs from "fs";

export function inputFile(day: number): string {
    return fs.readFileSync("./days/" + day + "/input.txt", "utf-8").trim();
}