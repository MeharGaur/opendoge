// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import Web3 from "web3"
import { fetchData } from "./_fetch-data"

const web3 = new Web3(process.env.ETH_INFURA_URL!)

export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    if (request.method != "GET") {
        response.status(400).json({message:"invalid request method"});
        return;
    }

    const data = await fetchData(request.query.walletAddress as string);

    console.log(data);
    response.status(200).json(data);
}

