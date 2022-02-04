const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, '[exportMC]');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
let i = 0;
files.forEach(file => {
    rename(
        imageDirPath + `/${file}`,
        imageDirPath + `/${"0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)}`,
        err => console.log(err));  
    i++;
    } );
