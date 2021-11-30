function timer() {
  let args = process.argv.slice(2);
  console.log(args);
  let multiplyer = 1000;

  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i]) || Number(args[i] < 0 || args.length === 0)) {
      console.log("Invalid. must enter a number greater than 0");
    } else {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, args[i] * multiplyer);
    }
  }
}

timer();
