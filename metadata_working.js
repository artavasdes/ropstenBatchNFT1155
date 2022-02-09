let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];

const { readdirSync, rename } = require('fs');
const { resolve } = require('path');
const imageDirPath = resolve(__dirname, 'export');

const files = readdirSync(imageDirPath);

let i = 0;
files.forEach(file => {
    console.log(file);
    if(path.extname(file) == '.png'){
        ipfsArray.push({
            path: `metadata/${file}`,
            content: {
                image: `ipfs://QmeWPKpPBvKxrUzmniDvoLgrkkod1y3twjjcxTm33u1vRz/images/${file}`,
                name: `Gender Sign #${i}`,
                description: "One of the blocks from the classic game minecraft"
            }
        })
    }
    else if(path.extname(file) == '.gif'){
        ipfsArray.push({
            path: `metadata/${file}`,
            content: {
                image: `ipfs://QmeWPKpPBvKxrUzmniDvoLgrkkod1y3twjjcxTm33u1vRz/images/${file}`,
                name: `Minecraft Block #${i}`,
                description: "One of the blocks from the classic game minecraft"
            }
        })
    }
    i++;
} );

console.log("After image process");

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

console.log("After upload");