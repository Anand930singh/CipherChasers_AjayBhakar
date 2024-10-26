"use client";

import React, { useState } from "react";
import { ethers } from "ethers";
import contractABI from "@/data/abi.json";

const MintButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState("");

  const contractAddress = "0x310e97EeC3a475E0D2b01bC899365761901F18e6";

  const mintNFT = async () => {
    if (!window.ethereum) {
      setError("Metamask is not installed.");
      return;
    }

    setLoading(true);
    setError("");
    setTxHash("");

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const tx = await contract.mint();
      setTxHash(tx.hash);
      await tx.wait();
      alert("Minting successful!");
    } catch (err) {
      console.error(err);
      setError(err.message || "Minting failed! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={mintNFT} disabled={loading}>
        {loading ? "Minting..." : "Mint Now"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {txHash && (
        <p>
          Transaction Hash:{" "}
          <a
            href={`https://etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {txHash}
          </a>
        </p>
      )}
    </div>
  );
};

export default MintButton;
