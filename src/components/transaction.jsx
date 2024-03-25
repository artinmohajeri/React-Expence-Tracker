import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";


function Transaction(props) {
    const { transactions } = useContext(GlobalContext)
    // const { deleteTransaction } = useContext(GlobalContext)
    return (
        <div id="transaction" className="d-flex justify-content-between p-2 mb-3">
            <span id="transaction-title">{props.transaction.text}</span>
            <span id="transaction-price" style={{ color: props.transaction.amount > 0 ? 'green' : 'red' }}>{props.transaction.amount}</span>
        </div>
    );
}

export default Transaction;