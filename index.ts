const day = process.argv[2];

if (!day) {
  console.error("Please provide a day number");
  process.exit(1);
}

(async () => {
    const module = await import("./days/" + day + "/index.ts");

    if (module.default) {
        module.default();
    } else {
        console.error("No default export found in day " + day);
    }
})();   