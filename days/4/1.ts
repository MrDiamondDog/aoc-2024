import { inputFile } from "../../util";

const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
];

const word = "XMAS";

export default async function() {
    const input = inputFile(4);
    const grid = input.split("\n").map(row => row.split(""));

    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        const row = grid[y];
        for (let x = 0; x < grid[y].length; x++) { 
            const letter = row[x];

            if (letter !== word[0]) continue;

            let newDir = [0, 0];
            for (const dir of directions) {
                if (grid[y + dir[1]]?.[x + dir[0]] !== word[1]) continue;

                newDir = [...dir];

                let valid = true;
                for (let i = 2; i < word.length; i++) {
                    newDir[0] += dir[0];
                    newDir[1] += dir[1];

                    if (grid[y + newDir[1]]?.[x + newDir[0]] !== word[i]) {
                        valid = false;
                        break;
                    }
                }

                if (valid)
                    sum++;
            }
        }
    }

    return sum;
}