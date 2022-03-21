const abi = [{ "inputs": [{ "internalType": "contract ENS", "name": "_ens", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": true, "internalType": "uint256", "name": "contentType", "type": "uint256" }], "name": "ABIChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "a", "type": "address" }], "name": "AddrChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "coinType", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "newAddress", "type": "bytes" }], "name": "AddressChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "target", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isAuthorised", "type": "bool" }], "name": "AuthorisationChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "bytes", "name": "hash", "type": "bytes" }], "name": "ContenthashChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "bytes", "name": "name", "type": "bytes" }, { "indexed": false, "internalType": "uint16", "name": "resource", "type": "uint16" }, { "indexed": false, "internalType": "bytes", "name": "record", "type": "bytes" }], "name": "DNSRecordChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "bytes", "name": "name", "type": "bytes" }, { "indexed": false, "internalType": "uint16", "name": "resource", "type": "uint16" }], "name": "DNSRecordDeleted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "DNSZoneCleared", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": true, "internalType": "bytes4", "name": "interfaceID", "type": "bytes4" }, { "indexed": false, "internalType": "address", "name": "implementer", "type": "address" }], "name": "InterfaceChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }], "name": "NameChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "x", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "y", "type": "bytes32" }], "name": "PubkeyChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "indexed": true, "internalType": "string", "name": "indexedKey", "type": "string" }, { "indexed": false, "internalType": "string", "name": "key", "type": "string" }], "name": "TextChanged", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "uint256", "name": "contentTypes", "type": "uint256" }], "name": "ABI", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "addr", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "uint256", "name": "coinType", "type": "uint256" }], "name": "addr", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "authorisations", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "clearDNSZone", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "contenthash", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "uint16", "name": "resource", "type": "uint16" }], "name": "dnsRecord", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes32", "name": "name", "type": "bytes32" }], "name": "hasDNSRecords", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes4", "name": "interfaceID", "type": "bytes4" }], "name": "interfaceImplementer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes[]", "name": "data", "type": "bytes[]" }], "name": "multicall", "outputs": [{ "internalType": "bytes[]", "name": "results", "type": "bytes[]" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }], "name": "pubkey", "outputs": [{ "internalType": "bytes32", "name": "x", "type": "bytes32" }, { "internalType": "bytes32", "name": "y", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "uint256", "name": "contentType", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "setABI", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "uint256", "name": "coinType", "type": "uint256" }, { "internalType": "bytes", "name": "a", "type": "bytes" }], "name": "setAddr", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "address", "name": "a", "type": "address" }], "name": "setAddr", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bool", "name": "isAuthorised", "type": "bool" }], "name": "setAuthorisation", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes", "name": "hash", "type": "bytes" }], "name": "setContenthash", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "setDNSRecords", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes4", "name": "interfaceID", "type": "bytes4" }, { "internalType": "address", "name": "implementer", "type": "address" }], "name": "setInterface", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "string", "name": "name", "type": "string" }], "name": "setName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "bytes32", "name": "x", "type": "bytes32" }, { "internalType": "bytes32", "name": "y", "type": "bytes32" }], "name": "setPubkey", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "string", "name": "key", "type": "string" }, { "internalType": "string", "name": "value", "type": "string" }], "name": "setText", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes4", "name": "interfaceID", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }, { "internalType": "string", "name": "key", "type": "string" }], "name": "text", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }];

const StatusIm = require('js-status-chat-name');
const ethers = require('ethers');
//const multibase = require('multibase');
var h3 = document.getElementById("3wordname");
const chatkey_el = document.getElementById("status-chatkey");
chatkey_el.addEventListener('input', updateH3);
function updateH3(el) {
	try {
		var chatname = StatusIm.chatKeyToChatName(el.target.value);
		h3.textContent = chatname;
	} catch {
		h3.textContent = "";
	}
}

var button = document.getElementById("gentxn");
button.onclick =
	async function () {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		// MetaMask requires requesting permission to connect users accounts
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const ens_name_el = document.getElementById("ens-text");
		const ens_name = ens_name_el.value;
		const chatkey_el = document.getElementById("status-chatkey");
		const chatkey = chatkey_el.value;
		if (chatkey.length != 64 * 2 + 4 || "0x04" != chatkey.slice(0, 4)) {
			alert("Incorrect chatkey, must start with 0x04");
			return;
		}
		const x_str = chatkey.slice(4, 4 + 64);
		const y_str = chatkey.slice(4 + 64, 4 + 64 + 64);
		const x = ethers.utils.arrayify("0x" + x_str);//ethers.utils.base64("0x" + x_str);
		const y = ethers.utils.arrayify("0x" + y_str);//ethers.utils.base64("0x" + y_str);
		const resolver = await provider.getResolver(ens_name);
		const namehash = ethers.utils.namehash(ens_name);
		const resolverAddress = resolver.address;
		const rc = new ethers.Contract(resolverAddress, abi, signer);
		try {
			await rc.setPubkey(namehash, x, y);
		} catch {
			alert("You don't own this ENS name.")
		}
	};

var lookup = document.getElementById("lookup");
lookup.onclick =
	async function () {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		// MetaMask requires requesting permission to connect users accounts
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const ens_name_el = document.getElementById("ens-lookup");
		const ens_name = ens_name_el.value;
		const resolver = await provider.getResolver(ens_name);
		const resolverAddress = resolver.address;
		const namehash = ethers.utils.namehash(ens_name);
		const rc = new ethers.Contract(resolverAddress, abi, signer);
		const pubkey_sighash_str = rc.interface.getSighash('pubkey');
		const pubkey_sighash = ethers.utils.arrayify(pubkey_sighash_str);
		var pubkey_support = await rc.supportsInterface(pubkey_sighash);
		if (pubkey_support) {
			var result = await rc.pubkey(namehash);
			var chatkey = ethers.utils.hexConcat(['0x04', result[0], result[1]]);
			var chatname = StatusIm.chatKeyToChatName(chatkey);
			var chatkey_result = document.getElementById("chatkey_result");
			chatkey_result.textContent = chatname + ": " + chatkey;
		} else {
			alert("The ENS Resolver for this name doesn't support pubkey()");
		}
	};
