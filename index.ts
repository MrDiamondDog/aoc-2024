const day = process.argv[2];
const part = process.argv[3] || 1;

if (!day) {
  console.error("Please provide a day number");
  process.exit(1);
}

(async () => {
    const module = await import(`./days/${day}/${part}.ts`);

    if (module.default) {
        console.log(`Day ${day} Part ${part}`);
        console.log(await module.default());
    } else {
        console.error("No default export found in day " + day);
    }
})();   