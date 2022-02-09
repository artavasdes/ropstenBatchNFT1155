const { readdirSync, rename } = require('fs');
const path = require('path');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'exportTest');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
let i = 0;
files.forEach(file => {
    //maybe change all to 'png'
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    
    /*
        rename(imageDirPath + `/${file}`,
            imageDirPath + `/${paddedHex}.png`,
            err => console.log(err));
    */

    if(path.extname(file) == '.png'){
        rename(
            imageDirPath + `/${file}`,
            imageDirPath + `/${paddedHex}.png`,
            err => console.log(err));
    }
    else if(path.extname(file) == '.gif'){
        rename(
            imageDirPath + `/${file}`,
            imageDirPath + `/${paddedHex}.gif`,
            err => console.log(err));
    }
    i++;
} );
