const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);

const passwordLengthTotal = new Array(20).fill(0);
const arr = Array.from({length: 20}, (e, i)=> i)

for (line of lines) {
      
  const elements = line.split(delimiter);
  const passwordLength = elements[1].length;
  passwordLengthTotal[passwordLength]++;
} 
      
for (i = 0; i < passwordLengthTotal.length; i++){
fs.appendFileSync(outputFile, `Chars: ${arr[i]}, Count: ${passwordLengthTotal[i]} \n`, "utf-8");
}      
