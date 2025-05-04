🚀 BlockPay Documentation – Pharos Hackathon Submission
Track: DeFiTeam: Gaurav, BhagravDeployed On: Pharos Devnet🔗 Live Demo📂 GitHub Repository  

💡 Project Overview
BlockPay is a next-generation Web3 payment dApp designed to simplify decentralized transactions on the Pharos Devnet. It replaces complex wallet addresses with human-readable usernames, introduces trust-based on-chain credit scores, and leverages milestone-based smart contracts for secure freelance payments. Built for the Pharos Hackathon, BlockPay combines intuitive user experience with robust blockchain technology to foster adoption and trust in the Pharos ecosystem.

🔥 Key Features
1. Username-Based Transfers

Send ETH or tokens to @username instead of cumbersome 0x... addresses.
Powered by a global username registry smart contract.

2. Freelance Smart Contracts

Escrow-protected payments with milestone tracking.
Mutual approval workflows for secure freelance transactions.
Deadline enforcement and SWC (Standard Work Contract) compliance.

3. On-Chain Credit Scores

Builds user reputation based on successful transactions and contract completions.
Enhances trust within the Pharos community.

4. AI Chatbot Assistant

Real-time user support via Botpress integration.
Guides users through setup, transactions, and FAQs.

5. User-Friendly Onboarding

Interactive guided tour powered by Driver.js.
Seamless MetaMask integration for wallet connectivity.


🧠 Hackathon Alignment



Criteria
BlockPay Alignment



Ecosystem Impact
Enhances Pharos Devnet adoption with user-friendly DeFi tools.


Community Engagement
Promotes trust through transparent contracts and visible reputation scores.


Innovation
Combines usernames, escrow contracts, and credit scores for a unique solution.


Feasibility
Deployed on Pharos Devnet with modular, scalable smart contracts.


Traction
Live demo available, active development, and hackathon-ready deliverables.



🔐 Smart Contracts (Deployed on Pharos Devnet)
1. UsernameRegistry.sol

Address: 0xc1FB6A2C6b8Ef118a71A0091946ca59E4fa82F70
Maps wallet addresses to unique usernames.
Prevents duplicate usernames.
Emits events for registration tracking.

2. FundTransferWithRegistry.sol

Address: 0xB93C0b64caA66cf4A257f6C2D725260e1b664599
Enables transfers via usernames or addresses.
Supports claimable/refundable funds.
Logs transactions with metadata.

3. BlockPaySWC.sol

Address: 0x0900B2cfAE177EFCd097e86c60387D6DF4aa14CD
Implements SWC-compliant freelance contracts.
Features escrow protection, milestone tracking, and reputation updates.


🌐 Frontend Features

Register/Login: Seamless MetaMask SDK integration.
Dashboard: Displays balances, transaction history, and active contracts.
Fund Transfers: Simplified sending via usernames.
Freelance Workflow: Post jobs, receive proposals, and auto-generate contracts.
AI Chatbot: Botpress-powered support drawer.
Onboarding Tour: Guided setup with Driver.js.


🎨 UI/UX Design

Theme: Dark purple with glassmorphism cards.
Animations: Smooth transitions using Framer Motion.
Typography: Poppins and Roboto for readability.
Responsiveness: Optimized for desktop and mobile.
Support: Embedded AI chatbot for instant assistance.


⚙️ Technical Stack



Layer
Technologies



Frontend
React.js, Vite, Tailwind CSS, Framer Motion, Driver.js, Lucide Icons


Blockchain
Solidity, Hardhat, Pharos Devnet


Wallets
MetaMask SDK


AI/UX
Botpress, Lottie Animations



🚀 Setup Instructions
Prerequisites

Node.js (v18 or higher)
MetaMask browser extension
Pharos Devnet added to MetaMask (Chain ID: 50002, RPC URL: https://devnet.dplabs-internal.com)

Local Installation

Clone the repository:git clone https://github.com/0xkid-root/blockpay.git


Navigate to the frontend directory:cd blockpay/frontend


Install dependencies:npm install


Run the development server:npm run dev


Connect MetaMask to Pharos Devnet and interact with the dApp.


📜 License
Licensed under the Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0) License. Suitable for hackathons, academic research, and engineering evaluation, but not for commercial use.

🤝 Contributing
We welcome contributions! Please open issues or submit pull requests on our GitHub repository to help improve BlockPay.

📧 Contact
For inquiries, support, or collaboration opportunities, reach out via email: everythinggaurav48@gmail.com.

🚀 BlockPay – Empowering the Future of Web3 Payments on Pharos Devnet! 🔥
