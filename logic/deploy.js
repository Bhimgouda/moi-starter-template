require("dotenv").config();
const { VoyageProvider, Wallet, LogicFactory } = require("js-moi-sdk");
const DRedditManifest = "Require MANIFEST FILE with path";

// ------- Update with your Mnemonic ------------------ //
const MNEMONIC = process.env.MNEMONIC;

// JsonRpcProvider to interact with MOI Network (Here we are using public RPC from Voyage)
const provider = new VoyageProvider("babylon");

// Function to instantiate a wallet with provider and sender account
const constructWallet = async () => {
  const wallet = new Wallet(provider);

  // The path derives your account from the mnemonic
  const accountPath = "m/44'/6174'/7020'/0/0";

  await wallet.fromMnemonic(MNEMONIC, accountPath);
  return wallet;
};

const deployLogic = async () => {
  // getting wallet To sign and send the ix to the network
  const wallet = await constructWallet();

  // Create logic instance using Logic factory

  // Deploy the logic get ixResponse

  // await ixResponse.wait() for ixReceipt

  // Get the logic_id from ixReceipt and start making ixn from client app
};

deployLogic();
