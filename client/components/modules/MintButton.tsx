"use client";

import React, { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, ExternalLink } from "lucide-react";
import contractABI from "@/data/abi.json";

const MintButton = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState("");

  const contractAddress = "0x84f46ebCe18EF189919868eb759ad7a811cC69B7";

  // ... (keep networkConfig and switchToAmoyNetwork the same)

  const mintNFT = async () => {
    if (!window?.ethereum) {
      setError("Please install MetaMask to mint NFTs");
      setStatus("error");
      return;
    }

    setStatus("connecting");
    setError("");
    setTxHash("");

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found. Please connect your wallet.");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Get the current account
      const address = await signer.getAddress();
      console.log("Connected address:", address);

      const network = await provider.getNetwork();
      if (network.chainId !== 80002) {
        await switchToAmoyNetwork();
        await provider.send("eth_requestAccounts", []);
      }

      // Get balance before minting
      const balance = await provider.getBalance(address);
      console.log(
        "Account balance:",
        ethers.utils.formatEther(balance),
        "MATIC"
      );

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      setStatus("minting");

      // Try to get current gas price
      const gasPrice = await provider.getGasPrice();
      console.log(
        "Current gas price:",
        ethers.utils.formatUnits(gasPrice, "gwei"),
        "gwei"
      );

      // Prepare the mint transaction
      const mintTx = {
        to: contractAddress,
        from: address,
        gasLimit: ethers.utils.hexlify(500000), // Increased gas limit
        gasPrice: gasPrice,
        data: contract.interface.encodeFunctionData("mint", []), // Encode the mint function call
      };

      console.log("Sending transaction:", mintTx);

      try {
        // First try to estimate gas to check if the transaction will fail
        const estimatedGas = await provider.estimateGas(mintTx);
        console.log("Estimated gas:", estimatedGas.toString());
        mintTx.gasLimit = estimatedGas.mul(120).div(100); // Add 20% buffer
      } catch (gasError) {
        console.error("Gas estimation failed:", gasError);
        // Continue with default gas limit if estimation fails
      }

      // Send transaction
      const tx = await signer.sendTransaction(mintTx);
      console.log("Transaction sent:", tx.hash);
      setTxHash(tx.hash);

      // Wait for confirmation
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt);
      setStatus("success");
    } catch (err) {
      console.error("Minting error:", err);

      // More detailed error handling
      let errorMessage = "Minting failed. Please try again.";

      if (err.message?.includes("user rejected")) {
        errorMessage = "Transaction was rejected by user";
      } else if (err.error?.message) {
        errorMessage = `Contract error: ${err.error.message}`;
      } else if (err.data?.message) {
        errorMessage = `RPC error: ${err.data.message}`;
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto p-4">
      <Button
        onClick={mintNFT}
        disabled={status === "connecting" || status === "minting"}
        className="w-full h-12 text-lg font-semibold"
      >
        {status === "connecting" && (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting Wallet...
          </>
        )}
        {status === "minting" && (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Minting NFT...
          </>
        )}
        {status === "idle" && "Mint NFT"}
        {status === "success" && "Mint Another"}
        {status === "error" && "Try Again"}
      </Button>

      {error && (
        <Alert variant="destructive" className="w-full">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {txHash && (
        <Alert className="w-full">
          <AlertDescription className="flex items-center gap-2">
            <span>View on Explorer</span>
            <a
              href={`https://amoy.polygonscan.com/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center"
            >
              {txHash.slice(0, 6)}...{txHash.slice(-4)}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default MintButton;
