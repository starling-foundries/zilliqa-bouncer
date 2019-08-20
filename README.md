# The Zilliqa-Bouncer Project

## Maintenance note: 
This repository has been archived due to challenges surrounding the use of the typescript compiler with the zilliqa-js-sdk. Please see `starling-foundries/bouncer.js` for a functioning bouncer.

## Goals:

* To implement a generic meta transaction bouncer proxy inspired by [austingriffith]() and [tsuzukits]() ethereum implementations but integrated into the [Zilliqa-native tooling](https://github.com/Zilliqa/Zilliqa-JavaScript-Library).
* Provide a generic Docker process for straightforward deployment.
* Integrate with a scilla-lang send by signature contract to be implemented in [references repo](https://github.com/starling-foundries/references).
* reference contracts for on-chain resolution of metatransaction functions including: forward, execution and whitelist.
* Example with a reference token.
* Scilla smart contract library for inclusion into complex smart-contracts
* Non-transferrable NFT example


### Diagram borrowed [from](https://github.com/tsuzukit/meta-transaction)
![concept](image/readme_1.png "concept")

## Deployment

### Docker
TODO

###  NodeJS
See development workflow

### Development

1. clone the repo:

    `git clone git@github.com:starling-foundries/zilliqa-bouncer.git`

2. install deps:
   
    `cd zilliqa-bouncer && npm install`
   
3. to begin serving: 
   
    `npm run watch-ts` 
    
4. Open in browser to see results:
   
     `localhost:3000`

