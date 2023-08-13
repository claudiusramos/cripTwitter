import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0x29cE0cD2a992Be79BCe4d17231A50B7530eBa4E9";

export async function doLogin() {
    if (!window.ethereum) throw new Error("Não encontrei o MetaMask");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if (!accounts || !accounts.length) throw new Error("Nenhuma carteira encontrada ou operação não permitida");

    localStorage.setItem("wallet", accounts[0]);

    return accounts[0];


}

function getContract() {
    if (!window.ethereum) throw new Error("Não encontrei o MetaMask");

    const web3 = new Web3(window.ethereum);
    const from = localStorage.getItem("wallet");

    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });

}

export async function addTweet(text) {
    const contract = getContract();
    return contract.methods.addTweet(text).send();
}

export async function changeUserName(newName) {
    const contract = getContract();
    return contract.methods.achangeUserName(newName).send();
}

export async function getLastTweets(page) {
    const contract = getContract();
    const tweets = await contract.methods.getLastTweet(page).call();
    console.log
    return tweets.map(t => {
        return { ...t }
    }).filter(t => t.text !== "");
}