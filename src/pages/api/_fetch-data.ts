import type { NextApiRequest, NextApiResponse } from "next"
import Web3 from "web3"
import BN from "bn.js"
import { ethers } from 'ethers'
import { AbiItem } from 'web3-utils'
import { abi } from "./abi"

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

const web3 = new Web3(process.env.ETH_INFURA_URL!)

// @ts-ignore
const moonRewards = new web3.eth.Contract(abi, contractAddress)

export async function fetchData(recipientWalletAddressRaw: string) {

    let moonBalanceValue = "0";
    let pendingRewardsValue = "0";
    let burnedMoonValue;
    let buybackMoonValue;

    if (recipientWalletAddressRaw) {

        const recipientWalletAddress = recipientWalletAddressRaw as string

        // @ts-ignore
        const moonBalance = await moonRewards.methods.getMoonBalance(recipientWalletAddress).call({ from: recipientWalletAddress }, function (error, result) {
            if (error) {
                console.log("an error occured", error)
                return
            }
            moonBalanceValue = web3.utils.fromWei(result, "Mwei")
            console.log("moonBalance is:", moonBalanceValue)
        })

        try {
            // @ts-ignore
            const pendingRewards = await moonRewards.methods.getPendingRewards(recipientWalletAddress).call({ from: recipientWalletAddress }, function (error, result) {
                if (error) {
                    console.log("an error occured", error)
                    return
                }
                pendingRewardsValue = web3.utils.fromWei(result, "mether")
                console.log("pendingRewards is:", pendingRewardsValue)
            })
        } catch (error) {
            console.error(error)
            pendingRewardsValue = "0";
        }

    }

    // @ts-ignore
    const burnedMoon = await moonRewards.methods.getMoonBalance("0x000000000000000000000000000000000000dEaD").call({ } , function (error, result) {
        if (error) {
            console.log("an error occured", error)
            return
        }
        burnedMoonValue = web3.utils.fromWei(result, "Mwei")
        console.log("burnedMoonBalance is:", burnedMoonValue)
    })

    // @ts-ignore
    const buybackMoon = await moonRewards.methods.getMoonBalance(process.env.TEAM_WALLET_ADDRESS).call({ }, function (error, result) {
        if (error) {
            console.log("an error occured", error)
            return
        }
        buybackMoonValue = web3.utils.fromWei(result, "Mwei")
        console.log("buybackMoonValue is:", buybackMoonValue)
    })

    return {
        moonBalance: moonBalanceValue,
        pendingRewards: pendingRewardsValue,
        moonBurned: burnedMoonValue,
        moonBuybacks: buybackMoonValue
    }

}