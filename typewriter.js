const sentence = "hello there from lighthouse labs";

let time = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout((time) => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log('\n');
    }
  }, time);
  time += 50;
}