import { NextResponse } from "next/server";
import { ethers } from "ethers";
import { pinata } from "@/utils/ipfs"; // or wherever your IPFS uploader lives
import contractConfig from "@/contracts/config"; // adjust if needed
import { getContract } from "viem"; // or use your scaffold-eth hook if needed

export async function POST(req: Request) {
  try {
    const { userId, consentHash } = await req.json();

    if (!userId || !consentHash) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Build the metadata object
    const metadata = {
      type: "consent_event",
      version: "v1.0",
      timestamp: new Date().toISOString(),
      docHash: consentHash,
      userId, // not written to chain, but optionally saved off-chain
    };

    // Upload metadata to IPFS
    const ipfsResult = await pinata.uploadJSON(metadata); // or your IPFS helper
    const tokenURI = `ipfs://${ipfsResult.IpfsHash}`;

    // Instantiate signer (Vivian's wallet)
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const signer = new ethers.Wallet(process.env.VIVIAN_PRIVATE_KEY!, provider);
    const contract = new ethers.Contract(
      contractConfig.contracts.YourCollectible.address,
      contractConfig.contracts.YourCollectible.abi,
      signer
    );

    // Mint NFT to system's own address
    const tx = await contract.mintItem(signer.address, tokenURI);
    await tx.wait();

    return NextResponse.json({ success: true, txHash: tx.hash });
  } catch (error) {
    console.error("Minting error:", error);
    return NextResponse.json({ error: "Failed to mint consent NFT." }, { status: 500 });
  }
}
