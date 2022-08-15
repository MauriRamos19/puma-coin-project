import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, Transaction } from "@solana/web3.js";
import { useWallet } from '@solana/wallet-adapter-react';
import { createAssociatedTokenAccountInstruction, createTransferInstruction, getAssociatedTokenAddress, getMint } from "@solana/spl-token";
import base58 from "bs58";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

const solanaInit = async () => {

    //Red de solana a conectar
    const network = clusterApiUrl('devnet');
    const opts = {
        preflightCommitment: "confirmed"
    }
    const connection = new Connection(network, opts.preflightCommitment);


    //direccion autoridad mint
    const mintAuth = new PublicKey('7DXB18p5BQBwZpmVDu3RtyG34Jc6cQhPtz6ReVtGr1Jg')

    //direccion del token
    const tokenContract = new PublicKey("ND8Hje1MuZUqMYbxSh8gQCooMSuddky1NBwmX5NpsM9")

    const mint = await getMint(connection, tokenContract);

    return {
        connection,
        mintAuth,
        mint
    }
}

const useAddPumaTokenToWallet = () => {

    const wallet = useWallet();
    const { sendTransaction } = wallet;

    const addToken = async () => {

        const { connection, mint } = await solanaInit();

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

        const signature = await sendTransaction(createToken, connection)
        let blockhash = await connection.getLatestBlockhash('finalized').blockhash;
        createToken.recentBlockhash = blockhash;
        const confirm = await connection.confirmTransaction(signature);

        console.log("confirm: ", confirm);

        return !(confirm?.value?.err);
    }

    return addToken;

}

const useBuyPumaCoin = () => {

    const wallet = useWallet();
    const { sendTransaction } = useWallet();
    const {publicKey } = useWallet();

    const buyPumacoin = async (amount) => {

        if (
            !amount
            || isNaN(amount)
        ) throw new Error("Cantidad solicitada invalida");

        if (!publicKey) throw new WalletNotConnectedError();

        
        console.log('adios')

        const { connection, mint, mintAuth } = await solanaInit();

        const associatedAccount = await getAssociatedTokenAddress(mint.address, wallet.publicKey)

        const associatedAccountMintAuth = await getAssociatedTokenAddress(mint.address, mintAuth)

        const pumakey = "5gh3uz14myUo2bf2rc7EmpKzAAGQZi34CKy4m9xzbN9v65mTHny5XfLms7pWt46HdztXdQtxKg9AQnn52DbJ8rAc";
        const pumaKeyGen = Keypair.fromSecretKey(base58.decode(pumakey));

        const requestedPumaCoinAmount = amount * LAMPORTS_PER_SOL;

        const transferToken = new Transaction().add(
            createTransferInstruction(
                associatedAccountMintAuth,
                associatedAccount,
                mintAuth,
                requestedPumaCoinAmount
            )
        )

        const signature = await sendTransaction(transferToken, connection, { signers: [pumaKeyGen] })
        let blockhash = await connection.getLatestBlockhash('finalized').blockhash;
        transferToken.recentBlockhash = blockhash;
        const confirm = await connection.confirmTransaction(signature);

        return !(confirm?.value?.err);
    }

    return buyPumacoin;

}

export {
    useAddPumaTokenToWallet,
    useBuyPumaCoin
}