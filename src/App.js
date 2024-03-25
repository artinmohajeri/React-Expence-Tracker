import React, { Component } from 'react';
import Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/incomeExpensex';
import TransactionList from './components/transactionList';
import AddTransaction from './components/addTransaction';
import { GlobalContext, GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './app.scss'


class App extends Component {
    state = {}
    render() {
        return (
            <GlobalProvider>
                <Header />
                <div className='container'>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </GlobalProvider>
        );
    }
}

export default App;