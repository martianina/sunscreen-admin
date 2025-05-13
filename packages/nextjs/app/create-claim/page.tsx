"use client";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { useAccount } from "wagmi";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useWatchBalance } from "~~/hooks/scaffold-eth/useWatchBalance";
import { notification } from "~~/utils/scaffold-eth";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const CreateClaim: NextPage = () => {
  const [projectName, setProjectName] = useState<string | null>("");
  const [projectWebsite, setProjectWebsite] = useState<string | null>("");

  const { address, isConnected, isConnecting } = useAccount();
  const router = useRouter(); // Initialize useRouter for navigation
  
  const { data: caseTokenSymbol } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "symbol",
  });

  const { data: caseTokenBalance } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "balanceOf",
    args: [address],
  });

  const { data: vendorContractData } = useDeployedContractInfo("Vendor");
  const { writeContractAsync: writeVendorAsync } = useScaffoldWriteContract("Vendor");
  const { writeContractAsync: writeClaimNFTAsync } = useScaffoldWriteContract("ClaimNFT");

  const { data: vendorTokenBalance } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "balanceOf",
    args: [vendorContractData?.address],
  });

  const { data: vendorEthBalance } = useWatchBalance({ address: vendorContractData?.address });

  const { data: tokensPerEth } = useScaffoldReadContract({
    contractName: "Vendor",
    functionName: "tokensPerEth",
  });

  useEffect(() => {
    setProjectName(localStorage.getItem("project-nameInput"));
    setProjectWebsite(localStorage.getItem("project-websiteInput"));
  }, []);

  const handleVerifyDetails = async () => {
    try {
      await writeVendorAsync({ functionName: "buyTokens", value: 0 }); // Free claim
    } catch (err) {
      console.error("Error calling buyTokens function");
    }
  };

  const handleMintItem = async () => {
    const notificationId = notification.loading("Creating Claim NFT and Funding Contracts");
    try {
      await writeClaimNFTAsync({
        functionName: "createClaimNFT", // Adjusted to call the external function
        args: [],
      });

      notification.remove(notificationId);
      notification.success("Claim NFT Created and Contracts Funded Successfully");
      router.push('/blockexplorer'); // Redirect to /blockexplorer page after success
    } catch (error) {
      notification.remove(notificationId);
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        {/* Project Name and Website Box */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
          <div className="text-xl font-bold">Project Information</div>
          <div className="mt-4">
            <div><strong>Project Name:</strong> {projectName || "No project name provided"}</div>
            <div><strong>Website:</strong> {projectWebsite || "No website provided"}</div>
          </div>
        </div>

        {/* Verify Claim Details */}
        <div className="flex flex-col items-center space-y-4 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-8 w-full max-w-lg">
          <div className="text-xl">Verify Claim Details</div>
          <button className="btn btn-secondary mt-2" onClick={handleVerifyDetails}>
            Verify Details
          </button>
        </div>

        {/* Claim-Listing */}
        {caseTokenBalance && caseTokenBalance > BigInt(0) && (
          <div className="flex flex-col items-center space-y-4 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-8 w-full max-w-lg">
            <div className="text-xl">List Your Claim</div>
            {!isConnected || isConnecting ? (
              <RainbowKitCustomConnectButton />
            ) : (
              <button className="btn btn-primary mt-2" onClick={handleMintItem}>
                List Claim
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CreateClaim;
