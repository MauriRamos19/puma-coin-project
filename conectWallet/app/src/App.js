import './App.css';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import {  WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');

const network = clusterApiUrl('devnet');

const wallets = [
  /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
  new PhantomWalletAdapter(),
]

function App() {
    return (
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center', marginTop:'100px' }}>
        <WalletMultiButton />
        </div>
      </div>
    );
}

/* wallet configuration as specified here: https://github.com/solana-labs/wallet-adapter#setup */
const AppWithProvider = () => (
    <ConnectionProvider endpoint={network}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
)

export default AppWithProvider;

