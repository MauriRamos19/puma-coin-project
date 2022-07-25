import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
    Program, AnchorProvider, web3, getProvider
} from '@project-serum/anchor';
import idl from '../../idl.json';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import Button from "../../Components/Button/Button";


//Red de solana a conectar
const network = clusterApiUrl('devnet');

//Variables para manejo de wallet conectada
const { SystemProgram, Keypair } = web3;
const opts = {
    preflightCommitment: "processed"
}

//Direccion del contrato del programa (Deploy Anchor)
const programID = new PublicKey(idl.metadata.address);
const baseAccount = Keypair.generate();
//Billeteras conectadas
const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter()
]

const connection = new Connection(network,opts.preflightCommitment);

function GetProviderWallet(){
    const wallet = useWallet();
    const provider = new AnchorProvider(
        connection, wallet, opts.preflightCommitment,
        );
    return provider;
}

export function conectWallet (){
    return (
        <div><p>Wallet generada: {baseAccount.publicKey.toString()} <br/>
                Wallet conectada: {GetProviderWallet().wallet.publicKey.toString()}
            </p>
            <Button >Pide Solana</Button> 
        </div>
        );
}

/*async function airdropSol() {    
    const airdrop = await connection.requestAirdrop(GetProviderWallet().wallet.publicKey,1);
    const signature = await connection.confirmTransaction(airdrop);
    return signature;
}*/

