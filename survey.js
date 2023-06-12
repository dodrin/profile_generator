const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What is your name? Nicknames are also accepyable : ",
  (answer1) => {
    rl.question("What is an activity you like doing? : ", (answer2) => {
      rl.question("What do you listen to while doing that? : ", (answer3) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) : ", (answer4) => {
          rl.question("What is your favourite thing to eat for that meal? : ", (answer5) => {
            rl.question("Which sport is your absolute favourite? : ", (answer6) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! : ", (answer7) => {
                console.log(`My name is ${answer1}. An activity I like doing is ${answer2}. I listen to ${answer3} while doing it.`);
                console.log(`My favourite meal is ${answer4}, and My favourite thing to eat for the meal is ${answer5}.`);
                console.log(`My absolute favourite sport is ${answer6}, and my superpwer is that : ${answer7}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
