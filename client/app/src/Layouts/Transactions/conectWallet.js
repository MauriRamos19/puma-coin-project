import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
    Program, AnchorProvider, web3, getProvider
} from '@project-serum/anchor';
import idl from '../../idl.json';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import Button from "../../Components/Button/Button";
import Message from '../../Components/Message/Message';
import "./conectWallet.css"


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
    }

    async function transacciones(){
        const signatureTransactiones= await connection.getSignaturesForAddress(wallet.publicKey)
        console.log(signatureTransactiones[0].signature)
        document.getElementById("trans").innerHTML = signatureTransactiones[0].signature
    }
    
    useEffect(() => {
        
        if(!wallet.connected) {
            setMessage({
                active: false,
                type: "error",
                message: "No se pudo conectar con la Billetera/Wallet. Verifique la conexi??n y vuelva a intentarlo.",
            });
        } else {
            const billetera = wallet.publicKey
            
            setMessage({
                active: true,
                type: "alert",
                message: "Billetera/Wallet conectada. La billetera que usar?? para realizar las transacciones es: "+billetera,
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
                        <Button onClick={airdropSol}>Pide Solana</Button>
                        <Button onClick={transacciones}>Ver la Transaccion</Button>
                        <div>
                        <p className='conecWallet__par' id='trans'></p>    
                        </div>

                        
                    </div>
                )
                
            }
        </div>
    )

    
        
} 





