import React, { useContext } from "react";
import { InputContext } from "./InputContext";
import ThemeContext from "./ThemeContext";
import "./Contents.css";

export default function TotalBalance() {
    const theme = useContext(ThemeContext)
    const { valueArray } = useContext(InputContext);

    let totalIncome = 0;
    let totalExpense = 0;

    valueArray.forEach((item) => {
        if (item.type === "option1") {
            totalIncome += parseFloat(item.transactionValue);
        } else if (item.type === "option2") {
            totalExpense += parseFloat(item.transactionValue);
        }
    });

    const userBalance = totalIncome - totalExpense;

    return (
        <div className={`header-${theme}`}>
            <h3>Total Balance</h3>
            <p className={`body-${theme}`}>${userBalance}</p>
        </div>
    )

}



