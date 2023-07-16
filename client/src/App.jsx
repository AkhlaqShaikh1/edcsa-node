import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";
import GenerateSignature from "./GenerateSignature";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("0xef643185f36581a5753ed0669ed14c230b6c6120");
  const [recipient, setRecipient] = useState("0x7943eb1e995fa956d5ce54534a2ef93e1fac1377");
  const [amount, setAmount] = useState(0);
  const [nonce, setNonce] = useState(0);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        nonce={nonce}
        setNonce={setNonce}
      />
      <Transfer
        setBalance={setBalance}
        address={address}
        recipient={recipient}
        setRecipient={setRecipient}
        amount={amount}
        setAmount={setAmount}
        nonce={nonce}
        setNonce={setNonce}
      />
      <GenerateSignature
        setBalance={setBalance}
        address={address}
        recipient={recipient}
        setRecipient={setRecipient}
        amount={amount}
        setAmount={setAmount}
        nonce={nonce}
        setNonce={setNonce}
      />
    </div>
  );
}

export default App;
