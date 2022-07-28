import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
    Program, AnchorProvider, web3, getProvider
} from '@project-serum/anchor';
import idl from '../../idl.json';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import Button from "../../Components/Button/Button";
import {AccountLayout, TOKEN_PROGRAM_ID, getOrCreateAssociatedTokenAccount, createMint, getMint} from "@solana/spl-token";

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
const randomAccount = Keypair.generate();
const connection = new Connection(network,opts.preflightCommitment);
//direccion del token
const tokenContract = new PublicKey("ND8Hje1MuZUqMYbxSh8gQCooMSuddky1NBwmX5NpsM9")

export function ConectWallet (){
    const wallet = useWallet();
    const walletPublic = new web3.PublicKey(wallet.publicKey)
    function getProviderWallet(){
        const provider = new AnchorProvider(
            connection, wallet, opts.preflightCommitment,
            );
        return provider;
    }
    async function prueba(){
        const airdropWallet = await connection.requestAirdrop(randomAccount.publicKey,LAMPORTS_PER_SOL);
        const signature = await connection.confirmTransaction(airdropWallet);
        console.log(airdropWallet)
        const getMints = await getMint(connection,tokenContract);
        const mint = await createMint(connection,randomAccount,randomAccount.publicKey,null,9);
        console.log("token "+ mint)
        const tokenaccountPrueba = await getOrCreateAssociatedTokenAccount(connection,randomAccount,
            mint,randomAccount.publicKey)
        console.log('cuenta creada '+tokenaccountPrueba.address)
    }

    async function airdropSol() {    
        const airdrop = await connection.requestAirdrop( wallet.publicKey,LAMPORTS_PER_SOL);
        const signature = await connection.confirmTransaction(airdrop);
        console.log('Solicitando un AIRDROP en la DevNet, para la cuenta: '+ wallet.publicKey)
    }

    async function getAccountToken(){
        const getMintedToken = await getMint(connection,tokenContract);
       /* const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection,walletPublic,getMintedToken.mintAuthority,
        walletPublic);*/
        const transactionUserWallet = await connection.getAccountInfo(wallet.publicKey)
        const prueba = await connection.getTransactions()
        return console.log(transactionUserWallet.data()+prueba)
        /*return console.log('Creando cuenta para: '+ fromTokenAccount.address.toString());*/
    }
    
    if (!wallet.connected){     
        return(
            <div><p>Debe conectar la billetera/wallet</p></div>
        );
    }else{
        return (
            <div><p>
                    Wallet conectada: {getProviderWallet().wallet.publicKey.toString()}
                </p>
                <Button onClick={airdropSol}>Pide Solana</Button> 
                <Button onClick={getAccountToken}>Tokens</Button> 
            </div>
            );
    }
} 





