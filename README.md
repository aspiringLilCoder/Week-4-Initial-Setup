## Week 4: 🌐 Voting dApp

---

### Set up instructions for Group Members:
### 1. run the following
```sh
git clone https://github.com/Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024.git
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
* Access the MyToken and to-be-deployed contracts through `http://localhost:3000/debug`.

### 3. start the backend
* **open a third terminal:**
```sh
cd backend/
npm install
npm run start
```
* Access api interface through `http://localhost:3001/api`.

---
