import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import {
    Program, AnchorProvider, web3
} from '@project-serum/anchor';
import idl from '../../idl.json';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';

//Red de solana a conectar
const network = clusterApiUrl('devnet');

//Variables para manejo de wallet conectada
const { SystemProgram, Keypair } = web3;
const opts = {
    preflightCommitment: "processed"
}
const { billetera } = useWallet;

//Direccion del contrato del programa (Deploy Anchor)
const programID = new PublicKey(idl.metadata.address);
const wallet = new useWallet();
//Billeteras conectadas
const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter()
]

function conectadaWallet(){
    
    return "hola";
}
export function conectWallet (){

    const baseAccount = Keypair.generate();
    return (
        <p>{programID.toString()}</p>
        );
}

