const fs = require('fs');

const dir_path = 'exp1'; 
const filenames = fs.readdirSync('exp1');
console.log("\nFilenames in directory:");
filenames.forEach((exp1) => {
    console.log("File:", exp1);

});
