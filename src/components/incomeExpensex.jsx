import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext)
    let income = 0
    let expense = 0
    function calculateIncome() {
        transactions.forEach(function(transaction){
            if (transaction.amount>0) {
                income += transaction.amount
            }
        })
        return income
    }
    function calculateExpense() {
        transactions.forEach(function(transaction){
            if (transaction.amount<0) {
                expense += transaction.amount
            }
        })
        return expense
    }
    return (
        <div className="w-25 mt-4 m-auto" id="income-expense">
            <div className="border border-right-dark w-50 text-center">
                <span>INCOME</span><br />
                <span className="text-success price">${calculateIncome()}</span>
            </div>
            <div className=" w-50 text-center">
                <span>EXPENSE</span><br />
                <span className="text-danger price">${calculateExpense()}</span>
            </div>
        </div>
    );
}

export default IncomeExpenses;