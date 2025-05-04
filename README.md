<div align="center">

# BlockPay

🔒 Next-Generation Web3 Payment Platform on Pharos Devnet

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://blockpay-omega.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/0xkid-root/blockpay)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=for-the-badge)](https://creativecommons.org/licenses/by-nc/4.0/)

[Live Demo](https://blockpay-omega.vercel.app/) | [Documentation](#-documentation) | [Features](#-key-features) | [Setup](#-quick-start) | [Contributing](#-contributing)

<img src="frontend/public/favicon.svg" alt="BlockPay Logo" width="120px" height="120px">

</div>

## 📖 Documentation

**BlockPay** is a revolutionary Web3 payment dApp built for the Pharos Hackathon, designed to simplify decentralized transactions on the Pharos Devnet. Our platform transforms complex blockchain interactions into intuitive experiences by:

- Replacing hexadecimal addresses with human-readable usernames
- Implementing trust-based on-chain credit scores
- Providing secure, milestone-based smart contracts for freelancers

### 🌟 Key Features

#### 1. Username-Based Transfers
- Send ETH/tokens using @usernames instead of addresses
- Powered by our Username Registry Smart Contract
- Intuitive and user-friendly transaction process

#### 2. Smart Work Contracts (SWC)
- Escrow-protected milestone payments
- Automated approval workflows
- Deadline enforcement mechanisms
- Real-time progress tracking

#### 3. Blockchain Credit System
- On-chain reputation scoring
- Transaction success metrics
- Contract completion tracking
- Trust-building mechanisms

#### 4. Enhanced User Experience
- AI-powered support chatbot
- Interactive onboarding tour
- Seamless MetaMask integration
- Responsive design across devices

## 🔐 Smart Contracts

All contracts are deployed and verified on Pharos Devnet:

| Contract | Address | Purpose |
|----------|----------|----------|
| UsernameRegistry | `0xc1FB6A2C6b8Ef118a71A0091946ca59E4fa82F70` | Username-to-address mapping |
| FundTransfer | `0xB93C0b64caA66cf4A257f6C2D725260e1b664599` | Token transfers and claims |
| BlockPaySWC | `0x0900B2cfAE177EFCd097e86c60387D6DF4aa14CD` | Freelance contract management |

## 🛠 Technical Stack

- **Frontend**: React.js, Vite, TailwindCSS, Framer Motion
- **Blockchain**: Solidity, Hardhat, Pharos Devnet
- **Wallet Integration**: MetaMask SDK
- **User Experience**: Driver.js, Botpress, Lottie Animations

## 🚀 Quick Start

### Prerequisites

- Node.js v18+
- MetaMask Browser Extension
- Pharos Devnet Configuration:
  - Network Name: `Pharos Devnet`
  - RPC URL: `https://devnet.dplabs-internal.com`
  - Chain ID: `50002`

### Installation

```bash
# Clone the repository
git clone https://github.com/0xkid-root/blockpay.git

# Navigate to frontend
cd blockpay/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎨 UI/UX Features

- **Theme**: Dark mode with glassmorphism effects
- **Animations**: Smooth transitions and micro-interactions
- **Typography**: Poppins & Roboto for optimal readability
- **Responsiveness**: Mobile-first design approach
- **Support**: Integrated AI chatbot assistance

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📜 License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0) License - perfect for hackathons, research, and evaluation purposes.

## 📞 Contact

- **Email**: everythinggaurav48@gmail.com
- **Twitter**: [@BlockPaySecure](https://x.com/BlockPaySecure)

---

<div align="center">

### 🚀 BlockPay - Empowering the Future of Web3 Payments on Pharos Devnet! 🔥

Built with 💙 by Team BlockPay

</div>
