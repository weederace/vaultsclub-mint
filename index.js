import { useEffect, useState } from "react";

export default function Home() {
  const [connected, setConnected] = useState(false);
  const [minted, setMinted] = useState(1234);
  const total = 10000;

  const handleConnect = () => {
    setConnected(true);
  };

  const handleMint = () => {
    if (!connected) return alert("لطفاً ابتدا کیف‌پول را متصل کنید.");
    alert("✅ Mint با موفقیت شبیه‌سازی شد! (نسخه تستی)");
    setMinted(minted + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">VaultsClub Mint</h1>
      <p className="text-sm text-gray-400 mb-6 text-center">
        10,000 NFT برابر با 0.3 SOL – کیف‌پول مقصد: Ey9...NPem
      </p>
      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-md w-full">
        <div className="mb-4 text-center">
          <p className="text-xl font-semibold">Mint now</p>
          <p className="text-sm text-gray-400">
            Minted: {minted} / {total}
          </p>
        </div>
        {!connected ? (
          <button className="w-full py-2 bg-blue-600 rounded-lg" onClick={handleConnect}>
            اتصال کیف‌پول
          </button>
        ) : (
          <button className="w-full py-2 bg-green-600 rounded-lg" onClick={handleMint}>
            Mint NFT
          </button>
        )}
      </div>
    </div>
  );
}