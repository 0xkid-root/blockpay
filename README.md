Here's the revised README with the requested changes:

```markdown
# 🚀 BlockPay – Revolutionizing Web3 Payments

**Built for Pharos Hackathon**  
**Track:** DeFi  
**Team:** Gaurav , Bhagrav  
**Deployed On:** Pharos DEVNET  
🔗 [Live Demo](https://cryptify-defi.vercel.app/)  
📂 [GitHub](https://github.com/0xkid-root/blockpay)  

---

## 💡 What is BlockPay?

BlockPay is a next-generation Web3 payment dApp that replaces cumbersome wallet addresses with **human-readable usernames**, integrates **trust-based on-chain credit scores**, and uses **milestone-based smart contracts** for secure freelance payments. Built and deployed on the **Pharos Devnet**, BlockPay offers a seamless, decentralized payment experience.

---

## 🔥 Why BlockPay?

* **Username-Based Transactions**: Send funds to `@jane` instead of 0x... addresses.
* **Secure Escrow Contracts**: Milestone-based payments with SWC compliance.
* **On-Chain Reputation**: Trust scores based on transaction history.
* **User-Friendly Onboarding**: Interactive tour powered by Driver.js.
* **AI Chatbot**: Real-time support via Botpress integration.
* **Cross-Platform**: Works with MetaMask SDK across devices.
* **Tech Stack**: Vite, React, Tailwind CSS, Hardhat, Solidity.

---

## 🧠 Hackathon Judging Fit

| **Criteria**              | **BlockPay Alignment**                                                           |
| ------------------------- | --------------------------------------------------------------------------------- |
| Ecosystem Impact          | Boosts Pharos Devnet adoption with intuitive UX and reputation incentives         |
| Community Engagement      | Fosters trust via public contracts, proposals, and visible user reputation        |
| Innovation & Originality  | Merges usernames, escrow contracts, and credit scores into a unique DeFi solution |
| Feasibility & Scalability | Leverages low-gas Layer 2/3 infra; modular contracts for easy growth              |
| Team Strength             | Full-stack developers skilled in Solidity, React, and wallet integrations         |
| Traction                  | Live demo, active Twitter, chatbot support, and hackathon-ready deliverables      |

---

## 🎨 UI & UX Design

* **Theme**: Sleek dark purple with glassmorphism cards.
* **Animations**: Smooth transitions via Framer Motion.
* **Typography**: Poppins and Roboto for clarity and style.
* **Responsiveness**: Optimized for desktop and mobile.
* **Onboarding**: Guided setup tour with Driver.js.
* **Support**: AI chatbot drawer for instant help.

---

## 🔐 Smart Contracts

Deployed on **Pharos Devnet**:

### `UsernameRegistry.sol`

📍 **Address**: `0xc1FB6A2C6b8Ef118a71A0091946ca59E4fa82F70`

* Maps wallet addresses to unique usernames and vice versa
* Ensures no duplicate usernames
* Emits events for registration tracking

### `FundTransferWithRegistry.sol`

📍 **Address**: `0xB93C0b64caA66cf4A257f6C2D725260e1b664599` ✅ Updated

* Supports transfers via usernames or addresses
* Features claimable or refundable funds
* Logs all transactions with metadata

### `BlockPaySWC.sol`

📍 **Address**: `0x0900B2cfAE177EFCd097e86c60387D6DF4aa14CD`

* Implements SWC-compliant freelance contracts with:
  * Escrow protection
  * Approval workflows
  * Milestone tracking
  * On-chain reputation updates

*SWC = Standard Work Contract specification for secure freelance payments.*

---

## 🌐 Frontend Modules

* **Register/Login**: MetaMask SDK integration.
* **Dashboard**: Balances, transaction history, and contracts.
* **Fund Transfers**: Send via usernames.
* **Freelance Workflow**: Post work, receive proposals, auto-generate contracts.
* **AI Chatbot**: Botpress-powered assistance.
* **Onboarding Tour**: Driver.js for user guidance.

---

## ⚙️ Tech Stack

| **Layer**  | **Technologies**                                                     |
| ---------- | -------------------------------------------------------------------- |
| Frontend   | React.js, Vite, Tailwind CSS, Framer Motion, Driver.js, Lucide Icons |
| Blockchain | Solidity, Hardhat, Pharos Devnet                                     |
| Wallets    | MetaMask SDK                                                         |
| AI/UX      | Botpress, Lottie Animations                                          |

---

## 📜 Features

### Username-Based Transfers

Send ETH or tokens to `@username` via a global registry.

### Freelance Smart Contracts

* Escrow-protected payments (milestone-based or single).
* Mutual approval process.
* Deadline enforcement.

### On-Chain Credit Scores

Reputation grows with successful transactions and contract completions.

### AI Chatbot Assistant

* Guides users through setup and FAQs.
* Embedded via Botpress API.

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 18
* MetaMask browser extension
* Pharos Devnet added to MetaMask

### Run Locally

```bash
cd blockpay/frontend
npm install
npm run dev
```

Ensure you have MetaMask installed and Pharos Devnet network added for a smooth experience.

---

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)** License.  
It can be used for **hackathons, academic research, and engineering evaluation** but **cannot be used for commercial purposes**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues, submit PRs, and help improve BlockPay.

---

## 📧 Contact Support

For any inquiries, support, or collaboration opportunities, feel free to reach out:

---

🚀 Join our Web3 revolution!

🔥 Built for the Future of Web3 Payments! 🔥
```

