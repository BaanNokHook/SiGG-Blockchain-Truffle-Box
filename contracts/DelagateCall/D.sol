
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// NOTE: Deploy this contract first
contract D {
    // NOTE: storage layout must be the same as contract A, B, C
    uint public num;
    address public sender;

    function setVars(uint _num) public {
        num = _num;
        sender = msg.sender;
    }
}