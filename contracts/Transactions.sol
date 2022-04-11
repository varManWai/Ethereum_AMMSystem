// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transactions {

    // event Transfer (address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // function publishTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
    //     emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword); 
    // }

    function calculationXYK(address payable receiver, uint amount) public {

    }

    function payTransctions() public {

    }

        // everytime there is changes, I need to deploy once
    
    //address public owner = msg.sender;
    
    // set the value of tokens x and y
    uint x = 0;
    uint y = 0;

    // get constant k
    function getConstantK () public view returns (uint) {
        return x * y;
    }

    

}