pragma solidity ^0.5.0;

import "./Context.sol";
import "./ERC20.sol";
import "./ERC20Detailed.sol";
import "./ERC20Burnable.sol";

contract VroomGo is Context, ERC20, ERC20Detailed {

    constructor () public ERC20Detailed("VroomGo", "VRGX", 18) {
        _mint(_msgSender(), 10000000000 * (10 ** uint256(decimals())) );
    }
}