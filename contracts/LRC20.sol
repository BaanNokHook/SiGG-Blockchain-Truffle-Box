// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LRC20 is ERC20, Ownable {

    uint8 private _decimal;
    uint256 private _totalSupply;
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint8 decimal
    ) ERC20(name, symbol) {
      _decimal = decimal;
      _totalSupply = initialSupply;
      _mint(msg.sender, initialSupply*(10**uint256(decimals())));
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimal;
    }

    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    function mint(address account, uint256 amount) public onlyOwner {
      _mint(account, amount);
    }

    function burn(address account, uint256 amount) public onlyOwner {
      _burn(account, amount);
    }
}