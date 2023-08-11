import Web3 from "web3";

export async function doLogin() {
    if (!window.ethereum) throw new Error("Não encontrei o MetaMask");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if (!accounts || !accounts.length) throw new Error("Nenhuma carteira encontrada ou operação não permitida");

    localStorage.setItem("wallet", accounts[0]);

    return accounts[0];


}