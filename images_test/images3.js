const { readdirSync, rename } = require('fs');
const path = require('path');
const { resolve } = require('path');

let fs = require("fs");
let axios = require("axios");

// Get path to image directory
const imageDirPath = resolve(__dirname, 'exportMC');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

let ipfsArray = [];
let promises = [];

// Loop through each file that was retrieved
let i = 0;
files.forEach(file => {
    promises.push(new Promise( (res, rej) => {
        fs.readFile(`${__dirname}/exportMC/${file}`, (err, data) => {
            if(err) 
            {
                console.log(err);
                console.log(i);
                rej();
            }
                ipfsArray.push({
                path: `images/${file}`,
                content: data.toString("base64")
            })
            res();
        })
    }))
    i++;
} );

Promise.all(promises).then( () => {
    axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", 
        ipfsArray,
        {
            headers: {
                "X-API-KEY": 'WJSuvMUH5qqtRsxIzNWspl9sR7MwvuGhMtTaMVBKTvaNFbsgjWBc3OZEmJCaF7oF',
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        }
    ).then( (res) => {
        console.log(res.data);
    })
    .catch ( (error) => {
        console.log(error)
    })
})
