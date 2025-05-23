import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useContract2 from "../../hooks/useContract2";
import Loader from "../Global/Loader";
import { FaCopy } from "react-icons/fa";

const UserContracts = ({ provider }) => {
  const { getUserContracts, signer } = useContract2(provider);
  const [contracts, setContracts] = useState([]);
  const [userAddress, setUserAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    const loadContracts = async () => {
      if (!provider || !signer || !getUserContracts) {
        setTimeout(() => {
          if (mounted) setReady(true);
        }, 500);
        return;
      }

      try {
        const address = await signer.getAddress();
        const userContracts = await getUserContracts();

        if (mounted) {
          setUserAddress(address);
          setContracts(Array.isArray(userContracts) ? userContracts : []);
        }
      } catch (err) {
        console.warn("⚠️ Non-blocking load error:", err.message);
        if (mounted) setContracts([]);
      } finally {
        if (mounted) {
          setReady(true);
          setLoading(false);
        }
      }
    };

    loadContracts();
    return () => (mounted = false);
  }, [provider, getUserContracts, signer]);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 0:
        return "bg-yellow-600";
      case 1:
        return "bg-blue-600";
      case 2:
        return "bg-indigo-600";
      case 3:
        return "bg-green-600";
      case 4:
        return "bg-red-500";
      case 5:
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  const statusLabels = [
    "Pending",
    "Approved",
    "InProgress",
    "Completed",
    "Cancelled",
    "Disputed",
  ];

  // 🔍 Filter logic
  const filteredContracts = contracts.filter((contract) => {
    if (filter === "all") return true;
    if (filter === "pending") return contract.status === 0;
    if (filter === "done") return contract.status === 3;
    return true;
  });

  return (
    <div className="rounded-md bg-customSemiPurple/60 backdrop-blur-lg border border-customPurple/30 shadow-custom-purple p-5 text-white transition-all">
      <h2 className="text-xl font-semibold mb-4">Your Contracts</h2>

      {/* 🧠 Filter Buttons */}
      <div className="flex gap-3 mb-4">
        {["all", "pending", "done"].map((type) => (
          <button
            key={type} 
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded-full text-sm font-medium border ${
              filter === type
               ? "bg-purple-600 border-purple-400 text-white"
                : "bg-transparent border-purple-300 text-purple-200 hover:bg-purple-500/20"
            }`}
          >
            {type === "all" ? "All" : type === "pending" ? "Pending" : "Done"}
          </button>
        ))}
      </div>

      <div className="max-h-40 lg:min-h-40 overflow-y-auto custom-scrollbar">
        {!ready || loading ? (
          <div className="h-32 flex justify-center items-center">
            <Loader />
          </div>
        ) : filteredContracts.length === 0 ? (
          <div className="text-center text-gray-400">
            <p>No contracts found.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {filteredContracts.map((contract) => (
              <li
                key={contract.contractId}
                onClick={() => navigate(`/contract?id=${contract.contractId}`)}
                className="p-4 rounded-lg bg-customPurple/10 backdrop-blur-md border border-customPurple/20 cursor-pointer relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-mono text-sm text-purple-400">
                    ID: #{contract.contractId}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(contract.contractId);
                    }}
                    title="Copy Contract ID"
                    className="text-purple-300 hover:text-white transition text-sm flex items-center gap-1"
                  >
                    <FaCopy className="w-3 h-3" />
                    {copiedId === contract.contractId ? "Copied!" : "Copy"}
                  </button>
                </div>

                <p>
                  <strong>Title:</strong> {contract.title}
                </p>
                <p>
                  <strong>Role:</strong>{" "}
                  {contract.creator.toLowerCase() === userAddress?.toLowerCase()
                    ? "Creator"
                    : "Receiver"}
                </p>
                <p>
                  <strong>Amount:</strong> {contract.amount} PHAR
                </p>
                <p className="flex items-center gap-2">
                  <strong>Status:</strong>
                  <span
                    className={`text-white text-xs px-2 py-1 rounded-full ${getStatusStyle(
                      contract.status
                    )}`}
                  >
                    {statusLabels[contract.status]}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserContracts;
