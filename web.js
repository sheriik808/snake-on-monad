const contractAddress = "0xYourContractAddressHere"; // вставь свой адрес

async function payAndStart() {
  if (typeof window.ethereum === 'undefined') {
    alert("Please install MetaMask!");
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    const tx = await contract.playGame({ value: ethers.utils.parseEther("0.01") });
    await tx.wait();
    startGame();
  } catch (err) {
    console.error(err);
    alert("Transaction failed or canceled.");
  }
}
