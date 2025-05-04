import React from "react";
import { FilePlus, Search, Compass, Star } from "lucide-react";

const ContractIntro = ({
  showCreateForm,
  showFetchForm,
  showReputationFetcher = false,
  showWorkPostForm,
  onToggleCreateForm,
  onToggleFetchForm,
  onToggleReputationFetcher = () => {},
  onToggleWorkPostForm,
  onStartTour,
  contractHooks,
  walletProvider,
}) => {
  return (
    <div
      data-driver="contract-intro"
      className="bg-customSemiPurple/60 backdrop-blur-lg border border-customPurple/30 p-8 rounded-xl space-y-6 w-full max-w-4xl mx-auto"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white mb-2">
          🚀 Discover the SWC System
        </h2>
        <p className="text-gray-300 max-w-3xl text-xl mx-auto">
          Securely manage milestone-based contracts on the Pharos Devnet. Create, track, and verify trust with ease—all powered by blockchain!
        </p>
      </div>

      <ul className="list-disc list-inside text-gray-400 text-xl px-4">
        <li>Launch contracts with milestones</li>
        <li>Track and manage active contracts</li>
        <li>Verify trust with Reputation Scores</li>
      </ul>

      <div className="flex flex-wrap justify-center gap-4 pt-2 w-full min-w-[600px]">
        <button
          onClick={onToggleCreateForm}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow transition"
        >
          <FilePlus size={18} />
          {showCreateForm ? "Hide Create Form" : "Create Contract"}
        </button>

        <button
          onClick={onToggleFetchForm}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow transition"
        >
          <Search size={18} />
          {showFetchForm ? "Hide Fetch Form" : "Fetch Contract"}
        </button>

        <button
          onClick={onToggleReputationFetcher}
          className="flex items-center gap-2 bg-white hover:bg-customNeonGreen/80 text-black px-5 py-2 rounded-full font-semibold shadow transition visible"
        >
          <Star size={18} />
          {showReputationFetcher ? "Hide Reputation" : "See Reputation Score"}
        </button>
      </div>

      {/* Start Tour Button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onStartTour}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-full shadow transition"
        >
          <Compass size={18} /> Start Tour Manually
        </button>
      </div>
    </div>
  );
};

export default ContractIntro;