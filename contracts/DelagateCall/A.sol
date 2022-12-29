
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract A {
    uint public num;
    address public sender;

    function setVars(
        address _contractB, 
        address _contractC, 
        address _contractD,
        uint _num
    ) public {
        (bool success, bytes memory data) = _contractB.delegatecall(
            abi.encodeWithSignature(
                "setVars(address,address,uint256)", 
                _contractC, 
                _contractD, 
                _num
            )
        );
    }
}