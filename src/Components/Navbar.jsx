import { useEffect, useState } from "react";
// import { connectWallet, getAccount } from "../utils/wallet";

const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
    //   const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  // TODO 4.a - Create onConnectWallet function
  const onConnectWallet = async () => {
    // await connectWallet();
    // const account = await getAccount();
    setAccount(account);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700   p-3  ">
        <div className="flex justify-between items-center pl-5 pr-5">
        <h1 className="text-white font-bold text-xl">Tezos Lottery</h1>
        <button className="p-3 border-2 border-cyan-500 text-cyan-500 p-3 rounded-lg font-semibold"
        onClick={onConnectWallet}>{account ? account : "Connect Wallet"}</button>
        </div>

    </div>
  );
};

export default Navbar;