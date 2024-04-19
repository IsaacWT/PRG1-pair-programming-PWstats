const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);

const passwordLengthTotal = new Array(21).fill(0);
let passwordsStartingWithA = (0);

for (line of lines) {
      
  const elements = line.split(delimiter);
  const password = elements[1];
  const passwordLength = password.length;
  passwordLengthTotal[passwordLength]++;
  if (password.toLowerCase().startsWith("a")){
    passwordsStartingWithA++;
  }
} 
      
for (i = 0; i < passwordLengthTotal.length; i++){
  fs.appendFileSync(outputFile, `Chars: ${[i]}, Count: ${passwordLengthTotal[i]} \n`, "utf-8");
}      
console.log(`There are ${passwordsStartingWithA} passwords that start with "a"`);