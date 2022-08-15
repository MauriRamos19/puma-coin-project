import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import pumaCoinLogo from '../../Assets/images/pumaCoinLogo.png'

import './ClaimPumasBtn.css'
import { useBuyPumaCoin } from '../../Hooks/Solana'
import { withCookies } from 'react-cookie'
import { claimTokens, getUnclaimedTokens } from '../../services/payments'

const ClaimPumasBtn = ({ dispatchModal, cookies, transactionID }) => {

    const [token, setToken] = useState(cookies.get("x_access_token"));
    const buyPumaCoin = useBuyPumaCoin();
    const [unclaimedTokens, setUnclaimedTokens] = useState({ tokens: [], amount: 0, });
    const [aux, setAux] = useState(0)

    useEffect(() => {
        getUnclaimedTokens(token)
            .then((tokensToClaim) => setUnclaimedTokens(tokensToClaim))
            .then(() => console.log(unclaimedTokens))
            .catch(err => console.log(err));
    }, [transactionID, token, aux])

    const onClaimTokens = () => {
        buyPumaCoin(unclaimedTokens.amount)
            .then(result => result && claimTokens(token, unclaimedTokens.tokens))
            .then(({ isUpdated }) => isUpdated && setAux(prev => prev + 1))
            .then(result => dispatchModal({ type: "close" }))
            .catch(error => console.error("something went wrong: ", error))
    }

    const onClickHandler = (evt) => {

        const title = (
            !isNaN(unclaimedTokens.amount) && unclaimedTokens.amount > 0 ?
            `Usted tiene ${unclaimedTokens.amount || 0} PumaCoin disponibles!`
            : "No tiene PumaCoin disponibles en este momento"
        );

        dispatchModal({
            type: "claimTokens",
            data: {
                title: title,
                headingIcon: <img src={pumaCoinLogo} alt="pumaCoinLogo" />,
                description: <span style={{fontSize: "0.9rem", color:"red"}}>Asegurate de tener sesion iniciada y conectada la wallet</span>,
                content: (
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem"
                    }}>
                        <Button onClick={() => dispatchModal({ type: "close" })}>Cerrar</Button>
                        <Button onClick={onClaimTokens}>Reclamar</Button>
                    </div>
                )
            }
        });
    }

    return (
        <Button className="ClaimPumasBtn" onClick={onClickHandler}>
            {unclaimedTokens.amount || 0}
            <img src={pumaCoinLogo} alt="pumaCoinLogo" />
        </Button>
    )
}

export default withCookies(ClaimPumasBtn)