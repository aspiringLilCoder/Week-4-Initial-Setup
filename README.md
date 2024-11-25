## Week 4: 🌐 Voting dApp

---

### Set up instructions for Group Members:
### 1. FORK the repo and run the following
```sh
git clone https://github.com/<your github username>Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024.git
cd Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024
git checkout Week-3
```
### 2. create and fill in the following '*.env*' file in the '*backend*', '*frontend/packages/hardhat*', and '*frontend/packages/nextjs*' folders
```env
PRIVATE_KEY="<your wallet private key should go here>"
DEPLOYER_PRIVATE_KEY="<your wallet private key should go here>"
ALCHEMY_API_KEY="********************************"
ETHERSCAN_API_KEY="********************************"
TOKEN_ADDRESS="0x85D57140a0dB24D45ee2bB3379e548D1253BFA36"
```
### 3. start the frontend

* **first terminal:**
```sh
cd frontend/scaffold-eth-2/
yarn install
yarn chain
```

* **second terminal:**
```sh
cd frontend/scaffold-eth-2/
yarn start
```
* Access frontend through `http://localhost:3000/`.

### 3. Add in your MyToken contract address in '*frontend/packages/nextjs/contracts/externalContracts.ts*'
```solidity
  11155111: {
    MyToken: {
      address: "", // Add the address of your deployed MyToken contract here
      abi: MyTokenAbi as Abi,
    },
  },
```

* Access the MyToken and to-be-deployed contracts through `http://localhost:3000/debug`.

### 3. start the backend
* **open a third terminal:**
```sh
cd backend/
npm install
npm run start
```
* Access api interface through `http://localhost:3001/api`.

### 3. commit changes!

---

## ✅ Todolist in order:
❌Implement the mintTokens function in `backend\src\app.service.ts`.

❌Successfully mint tokens to yourself or anyone using the `Request Tokens` button at `http://localhost:3000/`.

**The rest is repeating what we did in previous assignments, just in the `http://localhost:3000/debug` page this time:**

❌Delegate your minted tokens to yourself at `http://localhost:3000/debug` at the MyToken contract.

❌Deploy a new TokenizedBallot by running `yarn deploy –network sepolia` and make sure you’re on `frontend/scaffold-eth-2/`. (To change the proposals, edit `frontend\scaffold-eth-2\packages\hardhat\deploy\01_deploy_tokenized_ballots.ts`)

❌Go to `http://localhost:3000/debug` to your deployed TokenizedBallot contract and cast votes or query results.

❌ Lastly, send your forked repo and TokenizedBallot contract to our discord so I can add it to this readme!

**Bonus todos:**
* Store a list of recent votes in the backend and display that on frontend
* Use an oracle to fetch off-chain data

