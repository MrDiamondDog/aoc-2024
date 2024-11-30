import fs from "fs";

const dayNumber = process.argv[2];

if (!dayNumber) {
    console.error("Please provide a day number");
    process.exit(1);
}

if (fs.existsSync("./days/" + dayNumber + "/index.ts")) {
    console.error("Day " + dayNumber + " already exists");
    process.exit(1);
}

fs.mkdirSync("./days/" + dayNumber);
fs.writeFileSync("./days/" + dayNumber + "/index.ts", `import { inputFile } from "../../util";

export default async function() {
    const input = inputFile(${dayNumber});

    console.log("Day ${dayNumber}");
}`);
fs.writeFileSync("./days/" + dayNumber + "/input.txt", "");