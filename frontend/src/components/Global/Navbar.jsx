import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ethers } from "ethers";
import MetaMaskSDK from "@metamask/sdk";
import { FaBars, FaTimes, FaWallet, FaSignOutAlt, FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import { useWallet } from "./WalletContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { walletData, setWalletData } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const MMSDK = useRef(
    new MetaMaskSDK({
      dappMetadata: { name: "BlockPay" },
      logging: { developerMode: true },
    })
  ).current;

  useEffect(() => {
    const init = async () => {
      try {
        const provider = MMSDK.getProvider();
        if (!provider) throw new Error("MetaMask SDK not ready");
        const ethProvider = new ethers.BrowserProvider(provider);
        const accounts = await ethProvider.send("eth_accounts", []);
        if (accounts.length > 0) {
          setWalletData({ address: accounts[0], provider: ethProvider });
        } else {
          setWalletData({ address: null, provider: null });
        }

        provider.on("accountsChanged", (accounts) => {
          if (accounts.length === 0) {
            setWalletData({ address: null, provider: null });
          } else {
            const updatedProvider = new ethers.BrowserProvider(provider);
            setWalletData({ address: accounts[0], provider: updatedProvider });
          }
        });

        provider.on("chainChanged", () => window.location.reload());
      } catch (err) {
        setError("MetaMask initialization failed");
      }
    };
    init();

    return () => {
      const provider = MMSDK.getProvider();
      if (provider?.removeListener) {
        provider.removeListener("accountsChanged", () => {});
        provider.removeListener("chainChanged", () => {});
      }
    };
  }, [setWalletData]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-customBlue relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-customBlue"
      : "relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-customBlue after:transition-all after:duration-300 hover:text-customBlue";

  const connectWallet = async () => {
    try {
      const accounts = await MMSDK.connect();
      const provider = MMSDK.getProvider();
      if (!provider || !accounts?.length) throw new Error("Connection failed");
      const ethProvider = new ethers.BrowserProvider(provider);
      setWalletData({ address: accounts[0], provider: ethProvider });
    } catch (err) {
      toast.error("🦊 Wallet connection failed");
    }
  };

  const disconnectWallet = () => {
    setWalletData({ address: null, provider: null });
    MMSDK.terminate();
    navigate("/");
  };

  const copyAddress = () => {
    if (walletData.address) {
      navigator.clipboard.writeText(walletData.address);
      setCopied(true);
      toast.success("Address copied!");
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/contract", label: "Contract" },
    { path: "/docs", label: "Docs" },
    { path: "/transfer", label: "Transfer" },
    ...(walletData.address ? [{ path: "/user", label: "Profile" }] : []),
  ];

  return (
    <nav className="fixed top-0 w-full h-16 z-50 backdrop-blur-md bg-customDarkBlue/80 px-4 py-3 flex justify-between items-center shadow-navbar">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customAccent font-poppins"
      >
        BlockPay
      </motion.h1>

      <div className="hidden md:flex items-center gap-6 text-white font-poppins font-medium">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link to={link.path} className={getLinkClass(link.path)}>
              {link.label}
            </Link>
          </motion.div>
        ))}

        {walletData.address ? (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm shadow-md-blue border border-customBlue bg-gradient-to-r from-customBlue to-customAccent">
            <FaWallet />
            <span className="font-mono hidden lg:inline">
              {walletData.address.slice(0, 6)}...{walletData.address.slice(-4)}
            </span>
            <button onClick={copyAddress} title="Copy Address">
              <FaCopy className="hover:text-customGray transition" />
            </button>
            <button onClick={disconnectWallet} title="Disconnect">
              <FaSignOutAlt className="text-red-300 hover:text-red-500 transition" />
            </button>
          </div>
        ) : (
          <motion.button
            onClick={connectWallet}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 bg-customBlue hover:bg-customAccent text-white px-3 py-1.5 rounded-full shadow-md-blue transition text-sm"
          >
            <FaWallet /> Connect
          </motion.button>
        )}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-customDarkBlue backdrop-blur-md shadow-glass md:hidden">
          <div className="flex flex-col items-center gap-4 text-white font-poppins font-medium px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${getLinkClass(
                  link.path
                )} w-full text-center py-2 hover:bg-customDark/50 rounded-md transition`}
              >
                {link.label}
              </Link>
            ))}

            {walletData.address ? (
              <div className="flex flex-col items-center gap-2 px-4 py-3 text-sm bg-gradient-to-r from-customBlue to-customAccent rounded-xl shadow-soft w-full">
                <div className="flex items-center gap-2">
                  <FaWallet />
                  <span className="font-mono">
                    {walletData.address.slice(0, 6)}...
                    {walletData.address.slice(-4)}
                  </span>
                </div>
                <div className="flex gap-6">
                  <button
                    onClick={copyAddress}
                    className="flex items-center gap-1 hover:text-customGray transition"
                  >
                    <FaCopy /> Copy
                  </button>
                  <button
                    onClick={disconnectWallet}
                    className="flex items-center gap-1 text-red-400 hover:text-red-500 transition"
                  >
                    <FaSignOutAlt /> Disconnect
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="flex items-center justify-center gap-2 bg-customBlue hover:bg-customAccent text-white px-4 py-2 rounded-md shadow-soft w-full text-sm transition"
              >
                <FaWallet /> Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;