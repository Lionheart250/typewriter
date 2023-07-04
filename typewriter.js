const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout (() => {
    process.stdout.write(char); 
  }, delay);

  delay += 50;
}

//adding the newline as a seperate timeout call
setTimeout(() => {
  process.stdout.write('\n');
}, delay);