// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LiquidityPool {
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