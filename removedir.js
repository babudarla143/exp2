const fs = require('fs')
fs.rmdir('exp1',()=>
{
    console.log("file was removed success fully");
});
