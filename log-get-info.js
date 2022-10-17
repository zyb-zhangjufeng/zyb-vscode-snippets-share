async function getInfo(arg) {
  await new Promise((res) => setTimeout(res, 500));
  return `getInfo ${arg}`;
}

async function main() {
  return getInfo(`test`);
}

main();
