import React, { useEffect, useState } from 'react'
import { useGetTransactionHistory } from '../../Hooks/Solana';
import './TradeTable.css'

const TradeTable = ({ className }) => {

    const [transactionsHistory, setTransactionsHistory] = useState([]);
    const getTransactionHistory = useGetTransactionHistory();

    useEffect(() => {

        getTransactionHistory()
            .then((history) => setTransactionsHistory(history))
            .catch((error) => console.log(error))

        console.log(transactionsHistory);

    }, [])

    const getTableData = () => {

        const content = transactionsHistory.map((tran, i) => {
            return (
                <tr key={tran.slot}>
                    <td>{i + 1}</td>
                    <td>
                        <a href={`https://explorer.solana.com/tx/${tran.signature}?cluster=devnet`} target="_blank">{tran.signature}</a>
                    </td>
                    <td>{tran.confirmationStatus}</td>
                </tr>
            )
        });

        if (content.length > 0) {
            return (
                <table className={`Table ${className}`}>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>transacción ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table >
            )
        }

        return (
            <p
                className="message"
                style={{ color: "rgb(255, 71, 71)" }}
            >
                Debes tener tu sesión iniciada y tu wallet conectada
            </p>
        );
    }


    return (
        getTableData()
    )
}

export default TradeTable