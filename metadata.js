let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];

for (let i = 0; i < 24; i++) {
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    ipfsArray.push({
        path: `metadata/${paddedHex}.json`,
        content: {
            image: `ipfs://Qmf83g2AF7A7pcGfUL86zU433WXzXexLrNydNau8zmqMhw/images/${paddedHex}.png`,
            name: `Gender Sign #${i}`,
            description: "One of the infinite genders"
        }
    })
}
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