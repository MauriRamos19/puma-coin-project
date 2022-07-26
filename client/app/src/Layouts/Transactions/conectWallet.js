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
const network = clusterApiUrl('testnet');

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

export function ConectWallet (){

    const wallet = useWallet();
    function getProviderWallet(){
        const provider = new AnchorProvider(
            connection, wallet, opts.preflightCommitment,
            );
        console.log(wallet);
        return provider;
    }

    async function airdropSol() {    
        const airdrop = await connection.requestAirdrop(getProviderWallet().wallet.publicKey,LAMPORTS_PER_SOL);
        const signature = await connection.confirmTransaction(airdrop);
    }

    if (!wallet.connected){
        return(
            <div><p>Debe conectar la billetera/wallet</p></div>
        );
    }else{
        return (
            <div><p>Wallet generada: {baseAccount.publicKey.toString()} <br/>
                    Wallet conectada: {getProviderWallet().wallet.publicKey.toString()}
                </p>
                <Button onClick={airdropSol}>Pide Solana</Button> 
            </div>
            );
    }
} 



