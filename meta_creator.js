/*
    Creates metadata for files in a folder
    Insert CID for folder
*/

var fs = require('fs');

const { readdirSync, rename } = require('fs');
const { resolve } = require('path');
const imageDirPath = resolve(__dirname, 'exportMC');

const files = readdirSync(imageDirPath);

let i = 0;
files.forEach(file => {
    // var data = {
    //     table: []
    // };
    //data.table = []
    var obj = {
        attributes: [
            {
            trait_type: "Minecraft Block",
            value: "Block"
            }
        ],
        id: i,
        description: "An authentic block from the classic game Minecraft",
        image: `https://gateway.pinata.cloud/ipfs/QmUGcHHtxUgHznrCHLjuBGRRStupTQTKnWMztEXA71qqyp/${file}`,
        name: `Minecraft Block #${i}`
    }
   //data.table.push(obj)

   fs.writeFile(`metadata/${i}.json`, JSON.stringify(obj), function(err) {
    if (err) throw err;
    console.log('complete: ' + i);
    });
    i++;
})

console.log("TASK COMPLETE");

