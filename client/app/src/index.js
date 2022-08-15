import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter, SolflareWalletAdapter, CoinbaseWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import AppRouter from './Routes/AppRouter';




import './index.css';

require('@solana/wallet-adapter-react-ui/styles.css');

const network = clusterApiUrl('devnet');

const wallets = [
	/* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
	new PhantomWalletAdapter(),
	new SolflareWalletAdapter(),
	new CoinbaseWalletAdapter(),
	new TorusWalletAdapter()
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ConnectionProvider endpoint={network}>
			{/* {document.cookie.includes("x_access_token") ? */}
				{/* (<WalletProvider wallets={wallets} autoConnect>
					<WalletModalProvider>
						<AppRouter />
					</WalletModalProvider>
				</WalletProvider>) */}
				{/* : */}
				<WalletProvider wallets={wallets}>
					<WalletModalProvider>
						<AppRouter />
					</WalletModalProvider>
				</WalletProvider>
			{/* } */}

		</ConnectionProvider>
	</React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
