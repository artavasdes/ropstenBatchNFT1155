// SPDX-License-Identifier: NA

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Jamal is ERC1155 {
  using SafeMath for uint256;

  constructor() public ERC1155("ipfs://Qmc7HrvjHQZdNTuvg7JPcTpznVttmZ97LR5dJNtXQ7VUJ1/metadata/{id}.json") {
    for(uint256 i = 0; i<24; i++){
      _mint(msg.sender, uint16(i), 1, "");
    }
  }

  
  /*
  function uri(uint256 _tokenId) override public view returns (string memory){
    return string(
      abi.encodePacked(
        //change depending on ipfs
        "https://gateway.pinata.cloud/ipfs/QmQSDKPgXxbYJH4J1psCKr1pypSozvwocnDkM5cezqkqNQ/",
        Strings.toString(_tokenId),
        ".json"
      )
    );
  }
  */


}
