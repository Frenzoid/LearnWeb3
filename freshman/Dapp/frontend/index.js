// Obtain provider
const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");

// global variables.
let moodContract;

// On page load, we connect to the wallet.
window.addEventListener("load", connectWallet);

// We create an async function so we can use await, instead of .thens, because .thens are ugly af.
async function connectWallet() {
    await provider.send("eth_requestAccounts");

    const signer = provider.getSigner();
    moodContract = new ethers.Contract(moodDiaryMeta.output.address, moodDiaryMeta.output.abi, signer);

    getMood();
}

// On account change, update signer.
window.ethereum.on('accountsChanged', async () => {
    const signer = provider.getSigner();
    moodContract = new ethers.Contract(moodDiaryMeta.output.address, moodDiaryMeta.output.abi, signer);
});

// Main button functions
async function getMood() {
    const mood = await moodContract.getMood();
    document.getElementById("get_mood").innerText = mood;
}

async function setMood() {
    const mood = document.getElementById("set_mood").value;
    moodContract.setMood(mood);
}