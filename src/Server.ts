import { BN, Long, units, bytes } from "@zilliqa-js/util";
import { Zilliqa } from "@zilliqa-js/zilliqa";
import * as CP from "@zilliqa-js/crypto";
// import config from '../config.json';
import {config} from "dotenv";
import express from 'express';

console.log(process.env)
// API endpoint - change the .env file to use another endpoint than Kaya.
const zilliqa = new Zilliqa(process.env.API_ENDPOINT);

const app = express();

//Populate the wallet with an account
const privkey = process.env.OWNER_PKEY;
zilliqa.wallet.addByPrivateKey(privkey);

const address = CP.getAddressFromPrivateKey(privkey);
console.log("Your account address is:");
console.log(`0x${address}`)

// These are set by the core protocol, and may vary per-chain.
// These numbers are JUST AN EXAMPLE. They will NOT WORK on the public testnet
// or mainnet. Please check what they are before proceeding, or your
// transactions will simply be rejected.
const CHAIN_ID = Number(process.env.CHAIN_ID);
const MSG_VERSION = Number(process.env.MSG_VERSION);
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);


