let fs = require("fs");
let axios = require("axios");
const path = require("path");

let ipfsArray = [];
let promises = [];

const { readdirSync, rename } = require('fs');
const { resolve } = require('path');
const imageDirPath = resolve(__dirname, 'exportMC');

const files = readdirSync(imageDirPath);

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
        i++;
    }))
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

