import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./transaction";

function TransactionList() {
    // const { deleteTransaction } = useContext(GlobalContext)
    const { transactions } = useContext(GlobalContext)
    return (
        <div className="w-25 m-auto mt-5">
            <h5>History</h5>
            <hr />
            {transactions.map(transaction =>
                <Transaction key={transaction.id} transaction={transaction} />
            )}
        </div>
    );
}

export default TransactionList;