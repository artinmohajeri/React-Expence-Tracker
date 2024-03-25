import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Balance() {
    const { transactions } = useContext(GlobalContext)
    let total = 0
    function totalBalace() {
        transactions.map(
            transaction => total += transaction.amount
        )
        return total
    }
    return (
        <div className="mt-4">
            <h4 className="text-center">Your Balance</h4>
            <h1 className="text-center" id="balance">${totalBalace()}</h1>
        </div>
    );
}

export default Balance;