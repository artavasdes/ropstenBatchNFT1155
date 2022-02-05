let fs = require("fs");
let axios = require("axios");
const path = require("path");
const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

let ipfsArray = [];
let promises = [];

const imageDirPath = resolve(__dirname, 'exportMC');
const files = readdirSync(imageDirPath);


for (let i = 0; i < 287; i++) {
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    
    promises.push(new Promise( (res, rej) => {
        if(path.extname(`${__dirname}/exportMC/${paddedHex}.png`)=='.png'){
            fs.readFile(`${__dirname}/exportMC/${paddedHex}.png`, (err, data) => {
                if(err) 
                {
                    console.log(err);
                    console.log(i);
                    rej();
                }
                    ipfsArray.push({
                    path: `images/${paddedHex}.png`,
                    content: data.toString("base64")
                })
                res();
            })
        }
        else if(path.extname(`${__dirname}/exportMC/${paddedHex}.gif`)=='.gif'){
            fs.readFile(`${__dirname}/exportMC/${paddedHex}.gif`, (err, data) => {
                if(err) 
                {
                    console.log(err);
                    console.log(i);
                    rej();
                }
                    ipfsArray.push({
                    path: `images/${paddedHex}.gif`,
                    content: data.toString("base64")
                })
                res();
            })
        }
    }))
}
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

