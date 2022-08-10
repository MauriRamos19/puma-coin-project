import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL, Transaction, sendAndConfirmTransaction, sendAndConfirmRawTransaction, TransactionInstruction
, TransactionSignature,  
SendTransactionError} from '@solana/web3.js';
import {
    Program, AnchorProvider, web3, getProvider, Wallet, Spl
} from '@project-serum/anchor';
import idl from '../../idl.json';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider, useAnchorWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import Button from "../../Components/Button/Button";
import Message from '../../Components/Message/Message';
import "./conectWallet.css"
import {Token, TOKEN_PROGRAM_ID, MintLayout, getMint, createAssociatedTokenAccount, getAssociatedTokenAddress, 
    createAssociatedTokenAccountInstruction, 
    createMint,
    getOrCreateAssociatedTokenAccount,
    createTransferInstruction,NATIVE_MINT, transfer,
    TokenInstruction,
    createTransferCheckedInstruction,
    getAccount} from "@solana/spl-token";
import base58 from "bs58";

//Red de solana a conectar
const network = clusterApiUrl('devnet');

//Variables para manejo de wallet conectada

const { SystemProgram, Keypair } = web3;

const opts = {
    preflightCommitment: "confirmed"
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


    const { sendTransaction} = useWallet();
    const wallet = useWallet();

    function getProviderWallet(){
        const provider = new AnchorProvider(
            connection, wallet, opts.preflightCommitment,
            );
        return provider;
    }

    async function buyOneSol () {
        const transactionID = await connection.requestAirdrop( wallet.publicKey,LAMPORTS_PER_SOL);
        return transactionID;
    }

    async function airdropSol() {    
        await buyOneSol();
        console.log('Solicitando un AIRDROP en la DevNet, para la cuenta: '+ wallet.publicKey);
        document.getElementById("head_trans").innerHTML = 'Solicitando un AIRDROP en la DevNet, para la billetera: '+ wallet.publicKey
        document.getElementById("trans").innerHTML = "Se agregó exitosamente 1 SOL a su billetera."
        document.getElementById("sol_bal").innerHTML = ""
    }

    async function getSolBalance () {
        const balance = await connection.getBalance(wallet.publicKey)/LAMPORTS_PER_SOL;
        return balance;
    }   

    async function transacciones(){
        const signatureTransactiones= await connection.getSignaturesForAddress(wallet.publicKey)
        const signature = await getSolBalance();
        console.log(signatureTransactiones)
        console.log(signatureTransactiones[0].signature)
        console.log(signature)
        document.getElementById("head_trans").innerHTML = 'Se ha confirmado la transacción, la dirección es:'
        document.getElementById("trans").innerHTML = signatureTransactiones[0].signature
        document.getElementById("sol_bal").innerHTML = "Se agregó exitosamente 1 SOL a su billetera. SOL total: "+signature 
    }
    
    
    async function createTokenAccount(){

        // const solBalance = await getSolBalance();

        // if (solBalance === 0) {
        //     await airdropSol();
        // }

        // Mint == obtener direccion del token (contrato de puma)
        const mint = await getMint(connection,tokenContract)

        /*const pumakey = "5gh3uz14myUo2bf2rc7EmpKzAAGQZi34CKy4m9xzbN9v65mTHny5XfLms7pWt46HdztXdQtxKg9AQnn52DbJ8rAc" 
        const pumaKeyGen =  Keypair.fromSecretKey(base58.decode(pumakey))*/
        
        //Obtiene la cuenta del token creado
        const associatedAccount = await getAssociatedTokenAddress(
            mint.address,
            wallet.publicKey
        )

        console.log(associatedAccount.toString());

        //crea la cuenta en la billetera
        const createToken = new Transaction().add(
            createAssociatedTokenAccountInstruction(
                wallet.publicKey,
                associatedAccount,
                wallet.publicKey,
                mint.address
            )
        );

        const signature = await sendTransaction(createToken,connection)
        let blockhash = await connection.getLatestBlockhash('finalized').blockhash;
        createToken.recentBlockhash = blockhash;
        const confirm = await connection.confirmTransaction(signature)
    }

    async function buyTokenPuma(){
        const mint = await getMint(connection,tokenContract)

        const associatedAccount = await getAssociatedTokenAddress(mint.address,
            wallet.publicKey)
        
        const associatedAccountMintAuth = await getAssociatedTokenAddress(mint.address,
            mintAuth)
            console.log(associatedAccountMintAuth)
        const pumakey = "5gh3uz14myUo2bf2rc7EmpKzAAGQZi34CKy4m9xzbN9v65mTHny5XfLms7pWt46HdztXdQtxKg9AQnn52DbJ8rAc" 
        const pumaKeyGen =  Keypair.fromSecretKey(base58.decode(pumakey))

        const solBalance = await getSolBalance();

        if (solBalance === 0) {
            await airdropSol();
        }
        
        const transferToken = new Transaction().add(
            /*transfer(connection,pumaKeyGen,associatedAccountMintAuth,associatedAccount,wallet.publicKey,10*LAMPORTS_PER_SOL)*/
           createTransferInstruction(associatedAccountMintAuth,associatedAccount,mintAuth,10*LAMPORTS_PER_SOL)
        )
        
       /* const transferencia = await transfer(connection,pumaKeyGen,associatedAccountMintAuth,associatedAccount,wallet.publicKey,10)*/
    
       /* console.log(transferencia)*/
        const signature = await sendTransaction(transferToken,connection,{signers: [pumaKeyGen]})
        let blockhash = await connection.getLatestBlockhash('finalized').blockhash;
        transferToken.recentBlockhash = blockhash;
        const confirm = await connection.confirmTransaction(signature)
        
    }

    async function transferTokenPuma(toAddress2, amount2){
        let toAddress = new PublicKey("3zdTrDSCqYijvShHcH6Mfy6icBt2T724wKx5ZRxo3unh");
        let amount = 5*LAMPORTS_PER_SOL;
        const mint = await getMint(connection,tokenContract)
        const fromAssociatedAccount = await getAssociatedTokenAddress(mint.address,wallet.publicKey)
        const toAssociatedAccount = await getAssociatedTokenAddress(mint.address,toAddress);

        const transferToken = new Transaction().add(
           createTransferInstruction(
                fromAssociatedAccount,
                toAssociatedAccount,
                wallet.publicKey,
                amount
           )
        )
        console.log(transferToken)
        const signature = await sendTransaction(transferToken,connection)
        let blockhash = await connection.getLatestBlockhash('finalized').blockhash;
        transferToken.recentBlockhash = blockhash;
        const confirm = await connection.confirmTransaction(signature)
    }
    
    useEffect(() => {
        
        if(!wallet.connected) {
            setMessage({
                active: false,
                type: "error",
                message: "No se pudo conectar con la Billetera/Wallet. Verifique la conexión y vuelva a intentarlo.",
            });
        } else {
            const billetera = wallet.publicKey
            
            setMessage({
                active: true,
                type: "alert",
                message: "Billetera/Wallet conectada. La billetera que usará para realizar las transacciones es: "+billetera,
            });
        }
    }
    , [wallet]);

    
    return (
        <div>
            {
                !wallet.connected ? (
                <div>
                    <Message type={message.type} message={message.message} />
                </div>
                ) : (
                    <div>
                        <Message type={message.type} message={message.message} />
                        <Button className='conectWallet__btn' onClick={airdropSol}>Pide Solana</Button>
                        <Button className='conectWallet__btn' onClick={transacciones}>Ver la Transaccion</Button>
                        <Button className='conectWallet__btn' onClick={createTokenAccount}>Token</Button>
                        <Button className='conectWallet__btn' onClick={buyTokenPuma}>Comprar</Button>
                        <Button className='conectWallet__btn' onClick={transferTokenPuma}>hola</Button>
                    </div>
                )
                
            }
        </div>
    )

    
        
} 





/* to save in DB after payment
ID DB Local
Wallet address
Info pago en HNL 
*/