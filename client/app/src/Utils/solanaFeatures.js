async function getSolBalance () {
    const balance = await connection.getBalance(wallet.publicKey)/LAMPORTS_PER_SOL;
    return balance;
} 

const addPumaTokenToWallet = async function () {

    const solBalance = await getSolBalance();

    if (solBalance === 0) {
        await airdropSol();
    }

    // Mint == obtener direccion del token (contrato de puma)
    const mint = await getMint(connection,tokenContract)

    //Obtiene la cuenta del token creado
    const associatedAccount = await getAssociatedTokenAddress(
        mint.address,
        wallet.publicKey
    )

    //crea la cuenta en la billetera
    const createToken = new Transaction().add(
        createAssociatedTokenAccountInstruction(
            wallet.publicKey,
            associatedAccount,
            wallet.publicKey,
            mint.address
        )
    );

    console.log(associatedAccount.toString());

    const signature = await sendTransaction(createToken,connection)
    let blockhash = await connection.getLatestBlockhash('finalized').blockhash;
    createToken.recentBlockhash = blockhash;
    const confirm = await connection.confirmTransaction(signature)
}

export {
    addPumaTokenToWallet
}