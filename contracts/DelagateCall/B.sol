
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract B {
    // NOTE: storage layout must be the same as contract A
    uint public num;
    address public sender;

    function setVars(
        address _contractC, 
        address _contractD, 
        uint _num
    ) public {
        (bool success, bytes memory data) = _contractC.delegatecall(
            abi.encodeWithSignature(
                "setVars(address,uint256)",
                _contractD, 
                _num
            )
        );
    }
}