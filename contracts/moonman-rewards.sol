// SPDX-License-Identifier: Unlicensed

// Smart contract built for simple rewards app for holding $MOON.

/*
Logic:
The smart contract holds 6% of all transactions of $MOON to reward holders.
Your % of supply of $MOON is proportionate to your % of the balance in the smart 
contract. Thus, your % of the balance in the smart contract (rewards) is allocated
to you by using equation (1):

(1) your lifetime rewards = your $MOON balance / total $MOON supply * smart contract balance

To avoid duplicate transactions and ensure fairness, a user's current pending
rewards is calculated by equation (2):

(2) your current pending rewards = your lifetime rewards - your total amount collected thus far

When a user withdraws their pending rewards, the amount withdrawn is added to a variable
to keep track of their total amount collected. Hence, their new pending rewards can be
calculated by equation (2).

To store information, each user's current pending rewards, lifetime pending rewards,
and total amount collected are stores in maps, which are mapped to all addresses which
connect to the dapp. The key is the user address and the value is the amount.
*/

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

error Withdraw__TransferFailed();
error Balance__NeedsMoreThanZero();

contract MoonmanRewards is ReentrancyGuard {
    // $MOON contract goes here
    IERC20 private moonToken =
        IERC20(address(0xB404c51BBC10dcBE948077F18a4B8E553D160084));

    uint256 private constant TOTAL_SUPPLY = 100;
    uint256 private lifetimeRewardsWalletBalance = 0;

    /** @dev Mapping from address to the amount the user has been rewarded */
    mapping(address => uint256) private lifetimeAmountCollectedMap;

    /** @dev Mapping from address to the rewards claimable for user */
    mapping(address => uint256) private lifetimePendingRewardsMap;

    /** @dev Mapping from address to the current pending rewards for the user */
    mapping(address => uint256) private currentPendingRewardsMap;

    fallback() external payable { }
    receive() external payable { 
        lifetimeRewardsWalletBalance += msg.value;
    }

    function calculateCurrentPendingRewards(address account) public returns(uint256) {
        uint256 currentMoonBalance = getMoonBalance(account);
        lifetimePendingRewardsMap[account] = ((currentMoonBalance / TOTAL_SUPPLY) *
            lifetimeRewardsWalletBalance);

        // current pending rewards is equal to lifetime pending rewards - lifetime amount collected
        currentPendingRewardsMap[account] = lifetimePendingRewardsMap[account] - lifetimeAmountCollectedMap[account];
        return currentPendingRewardsMap[account];
    }

    function withdraw(address account)
        public
    {
        uint256 amount = getPendingRewards(account);
        if (amount <= 0) {
            revert Balance__NeedsMoreThanZero();
        }

        // initialize user's receiving wallet to payable type
        address payable wallet = payable(account);

        (bool success, ) = wallet.call{value: (amount / 1e6), gas: 2300}("");
        require(success, "Failed to send ether");

        // lifetimeAmountCollectedMap[account] is increased by amount just collected
        lifetimeAmountCollectedMap[account] += amount;
    }

    // Getter for UI
    function getMoonBalance(address account) public view returns (uint256) {
        return moonToken.balanceOf(account);
    }

    function getPendingRewards(address account) public returns (uint256) {
        return (calculateCurrentPendingRewards(account));
    }

}