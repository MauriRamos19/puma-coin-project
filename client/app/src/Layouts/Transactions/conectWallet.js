import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL, Transaction, sendAndConfirmTransaction, sendAndConfirmRawTransaction } from '@solana/web3.js';
import {
    Program, AnchorProvider, web3, getProvider, Wallet
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
    createTransferInstruction} from "@solana/spl-token";
import { SplAssociatedTokenAccountsCoder } from '@project-serum/anchor/dist/cjs/coder/spl-associated-token/accounts';

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


    const wallet = useWallet();

    function getProviderWallet(){
        const provider = new AnchorProvider(
            connection, wallet, opts.preflightCommitment,
            );
        return provider;
    }

    async function airdropSol() {    
        const airdrop = await connection.requestAirdrop( wallet.publicKey,LAMPORTS_PER_SOL);
        console.log('Solicitando un AIRDROP en la DevNet, para la cuenta: '+ wallet.publicKey);
        document.getElementById("head_trans").innerHTML = 'Solicitando un AIRDROP en la DevNet, para la billetera: '+ wallet.publicKey
        document.getElementById("trans").innerHTML = "Se agregó exitosamente 1 SOL a su billetera."
        document.getElementById("sol_bal").innerHTML = ""
    }

    async function transacciones(){
        const signatureTransactiones= await connection.getSignaturesForAddress(wallet.publicKey)
        const signature = await connection.getBalance(wallet.publicKey)/1000000000
        console.log(signatureTransactiones[0].signature)
        console.log(signature)
        document.getElementById("head_trans").innerHTML = 'Se ha confirmado la transacción, la dirección es:'
        document.getElementById("trans").innerHTML = signatureTransactiones[0].signature
        document.getElementById("sol_bal").innerHTML = "Se agregó exitosamente 1 SOL a su billetera. SOL total: "+signature 
    }
    
    
    async function createTokenAccount(){
    const mint = await getMint(connection,tokenContract)
    
    /*const tx = await getOrCreateAssociatedTokenAccount(
        connection,
        wallet,
        mint.address,
        wallet.publicKey);

    console.log(tx)*/

    /*const provider = await getProviderWallet()
    const program = new Program(idl, programID, provider);
    try {
        /* interact with the program via rpc */
    /*    await program.rpc.set_data({
            accounts: {
              my_account: mint,
              token_account: mint.address,
              owner: provider.wallet.publicKey,
            },
            signers: [wallet]
          });

      } catch (err) {
        console.log("Transaction error: ", err);
      }
    */
    const rand = Keypair.generate()

    const tx =  createAssociatedTokenAccountInstruction(
        wallet.publicKey,
        mint.address,
        wallet.publicKey,
        tokenContract)
    const tx2 = sendAndConfirmTransaction(connection,tx,[rand])
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
                    </div>
                )
                
            }
        </div>
    )

    
        
} 





