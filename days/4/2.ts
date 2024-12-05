import { inputFile } from "../../util";

const directions = [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
];

const oppositeDirections = [
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1]
]

export default async function() {
    const input = inputFile(4);
    const grid = input.split("\n").map(row => row.split(""));

    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        const row = grid[y];
        for (let x = 0; x < grid[y].length; x++) { 
            const letter = row[x];

            if (letter !== "A") continue;

            let crosses = 0;
            for (let i = 0; i < directions.length; i++) {
                const dir = directions[i];
                const oppDir = oppositeDirections[i];

                if (grid[y + dir[1]]?.[x + dir[0]] === "M" && grid[y + oppDir[1]]?.[x + oppDir[0]] === "S")
                    crosses++;
            }

            if (crosses == 2) sum++;
        }
    }

    return sum;
}