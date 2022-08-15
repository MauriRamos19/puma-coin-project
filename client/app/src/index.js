import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter, SolflareWalletAdapter, CoinbaseWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
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

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY || "pk_test_51LTvlHJhtZE9NlSGYxTqzVwolpqH3tPhl3IAFkQjRBtMA12483NZbMdBNXW86o6oach1qnXQlStgXK64HzqeOMWJ001MtiaAtd");
const stripeOptions = {
	// passing the client secret obtained in step 2
	clientSecret: "pi_3LWyvdJhtZE9NlSG1jtmg648_secret_v9rKO3MfdgEamRQNRDoZrZdRS",
	// Fully customizable with appearance API.
	appearance: {/*...*/ },
};

console.log(process.env)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ConnectionProvider endpoint={network}>
			<WalletProvider wallets={wallets}>
				<WalletModalProvider>
					<Elements stripe={stripePromise} options={stripeOptions}>
						<AppRouter />
					</Elements>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	</React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
