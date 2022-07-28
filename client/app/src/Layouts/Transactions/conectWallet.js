import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
    Program, AnchorProvider, web3, getProvider
} from '@project-serum/anchor';
import idl from '../../idl.json';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import Button from "../../Components/Button/Button";
import Message from "../../Components/Message/Message";


//Red de solana a conectar
const network = clusterApiUrl('devnet');

//Variables para manejo de wallet conectada

const { SystemProgram, Keypair } = web3;

const opts = {
    preflightCommitment: "processed"
}

//Direccion del contrato del programa (Deploy Anchor)
const programID = new PublicKey(idl.metadata.address);

//direccion autoridad mint
const mintAuth = new PublicKey('7DXB18p5BQBwZpmVDu3RtyG34Jc6cQhPtz6ReVtGr1Jg')
//Billeteras conectadas
const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter()
]

const connection = new Connection(network,opts.preflightCommitment);
//direccion del token
const tokenContract = new PublicKey("ND8Hje1MuZUqMYbxSh8gQCooMSuddky1NBwmX5NpsM9")

export function ConectWallet (){
    const [message, setMessage] = useState({ active: false });


    const wallet = useWallet();
    function getProviderWallet(){
        const provider = new AnchorProvider(
            connection, wallet, opts.preflightCommitment,
            );
        return provider;
    }

    async function airdropSol() {    
        const airdrop = await connection.requestAirdrop( wallet.publicKey,LAMPORTS_PER_SOL);
        const signature = await connection.confirmTransaction(airdrop);
        console.log('Solicitando un AIRDROP en la DevNet, para la cuenta: '+ wallet.publicKey)
    }
    
    if (!wallet.connected){     
        return(
            <div>
            <p>no conectada</p>
            </div>
        );
    }else{
        return (
            <div>
                <Button onClick={airdropSol}>Pide Solana</Button> 
            </div>
            );
    }
} 





