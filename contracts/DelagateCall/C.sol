
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// NOTE: Deploy this contract first
contract C {
    // NOTE: storage layout must be the same as contract A,B
    uint public num;
    address public sender;

    function setVars(address _contractD, uint _num) public {
        (bool success, bytes memory data) = _contractD.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}