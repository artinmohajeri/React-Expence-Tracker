import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function AddTransaction() {
    const { transactions } = useContext(GlobalContext)
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    return (
        <div className="w-25 m-auto mt-5">
            <h5>Add New Transaction</h5>
            <hr />
            
            <label htmlFor="text">Text</label><br />
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" name="text" id="text-input" placeholder="enter text..." className="p-1 ps-3 mt-2 mb-4 w-100" />

            <label htmlFor="text">Amount</label><br />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="number" id="amount-input" placeholder="enter amount..." className="p-1 ps-3 mt-2 w-100" />

            <button type="button" className="w-100 mt-4">Add Transaction</button>
        </div>
    );
}

export default AddTransaction;