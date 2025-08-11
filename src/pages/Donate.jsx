import { useState } from "react";
import { ethers } from "ethers";

function Donate() {
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState(null);

  // Change this to your donation wallet address
  const donationAddress = "0xYourDonationWalletAddressHere";

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError("MetaMask is not installed. Please install it to continue.");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const networkDetails = await provider.getNetwork();
      setNetwork(networkDetails.name);

      setError(null);
    } catch (err) {
      setError("Failed to connect wallet: " + err.message);
    }
  };

  // Send donation transaction
  const sendDonation = async () => {
    try {
      if (!amount || isNaN(amount) || Number(amount) <= 0) {
        setError("Please enter a valid donation amount.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const tx = await signer.sendTransaction({
        to: donationAddress,
        value: ethers.parseEther(amount), // Convert ETH to Wei
      });

      setTxHash(tx.hash);
      setError(null);

      // Wait for transaction to be confirmed
      await tx.wait();
      alert("Donation successful! Thank you ❤️");

    } catch (err) {
      setError("Donation failed: " + err.message);
    }
  };

  return (
    <div className="donate-page">
      <h2>Connect Your Wallet to Donate</h2>
      <p>Support our Inclusive Health & Well-being project with your contribution.</p>

      {!account ? (
        <button className="btn btn-primary" onClick={connectWallet}>
          Connect MetaMask
        </button>
      ) : (
        <div>
          <p><strong>Connected Account:</strong> {account}</p>
          <p><strong>Network:</strong> {network}</p>

          <div className="donation-form">
            <label>Donation Amount (ETH):</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.01"
            />
            <button className="btn btn-success" onClick={sendDonation}>
              Send Donation
            </button>
          </div>

          {txHash && (
            <p>
              ✅ Transaction sent:{" "}
              <a
                href={`https://etherscan.io/tx/${txHash}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Etherscan
              </a>
            </p>
          )}
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Donate;

