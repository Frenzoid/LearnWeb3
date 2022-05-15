// global variables.
let provider;
let moodContract;


// On page load, we connect to the wallet.
window.addEventListener("load", connectWallet);


// We create an async function so we can use await, instead of .thens, because .thens are ugly af.
async function connectWallet() {

    // We connect to the wallet.
    provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the user's wallet.
    await provider.send("eth_requestAccounts");

    // Check the network.
    await checkNetwork();

    // Get the contract.
    const signer = provider.getSigner();
    moodContract = new ethers.Contract(moodDiaryMeta.output.address, moodDiaryMeta.output.abi, signer);
	
	// Call getMood.
    getMood();
}

// On account change, update signer.
window.ethereum.on('accountsChanged', async () => {
    const signer = provider.getSigner();
    moodContract = new ethers.Contract(moodDiaryMeta.output.address, moodDiaryMeta.output.abi, signer);
});

window.ethereum.on('networkChanged', async () => {
	// I bet theres a proper way of updating the provider with the current network.
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await checkNetwork();
});


// Main button functions.
async function getMood() {
    const mood = await moodContract.getMood();
    document.getElementById("get_mood").innerText = mood;
}

async function setMood() {
    const mood = document.getElementById("set_mood").value;
    const tx = await moodContract.setMood(mood);
    await tx.wait();
    getMood();
}


// Helper functions.
async function checkNetwork() {
    const { name } = await provider.getNetwork();
    console.log(name);
    if (name != "ropsten") alert("Please connect to the Ropsten test network.");
}