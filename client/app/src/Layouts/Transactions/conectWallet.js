import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import {
    Program, AnchorProvider, web3
} from '@project-serum/anchor';
import idl from '../../idl.json';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { useState } from 'react';


//Red de solana a conectar
const network = clusterApiUrl('devnet');

//Variables para manejo de wallet conectada
const { SystemProgram, Keypair } = web3;
const opts = {
    preflightCommitment: "processed"
}

//Direccion del contrato del programa (Deploy Anchor)
const programID = new PublicKey(idl.metadata.address);

//Billeteras conectadas
const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter()
]



function ConectadaWallet(){
    const wallet = useWallet();
    const connection = new Connection(network,opts.preflightCommitment);
    const provider = new AnchorProvider(
        connection, wallet, opts.preflightCommitment,
        );
    return connection;
}

export function conectWallet (){

    const baseAccount = Keypair.generate();
    return (
        <p>{ConectadaWallet()}</p>
        );
}

