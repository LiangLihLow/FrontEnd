import React, { useState, useContext } from "react";
import { InputContext } from "./InputContext";
import ThemeContext from "./ThemeContext";
import "./Contents.css";

export default function Input() {
    const { valueArray, setValueArray } = useContext(InputContext);
    const theme = useContext(ThemeContext);

    const [transactionName, setTransactionName] = useState("");
    const [transactionValue, setTransactionValue] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("option1");

    const handleRadioChange = (value) => setSelectedRadio(value);



    const addInput = () => {
        if (isNaN(transactionValue)) {
            alert("Your input is invalid. Please enter a numerical value")
            return
        }
        const newItem = {
            transactionName,
            transactionValue,
            type: selectedRadio
        };
        setValueArray([...valueArray, newItem]);
        setTransactionName("");
        setTransactionValue("");
        alert(`${transactionName} is saved`);
    };

    return (
        <div className={`input-container-${theme}`}>
            <div className="input-usertext">
                <div>
                    <input
                        className="input-name"
                        type="text"
                        value={transactionName}
                        onChange={(event) => setTransactionName(event.target.value)}
                        placeholder="Transaction Name"
                    />
                </div>

                <div className="input-usertext">
                    <input
                        className="input-value"
                        type="text"
                        value={transactionValue}
                        onChange={(event) => setTransactionValue(event.target.value)}
                        placeholder="Transaction value"
                    />
                </div>

                <div>
                    <input
                        className="Income"
                        type="radio"
                        id="option1"
                        value="option1"
                        checked={selectedRadio === "option1"}
                        onChange={() => handleRadioChange("option1")}
                    />
                    <label htmlFor="option1" className={`labelRadio-${theme}`}>Income</label>
                </div>

                <input
                    className="Expenses"
                    type="radio"
                    id="option2"
                    value="option2"
                    checked={selectedRadio === "option2"}
                    onChange={() => handleRadioChange("option2")}
                />
                <label htmlFor="option2" className={`labelRadio-${theme}`}>Expenses</label>
            </div>

            <button onClick={addInput}>Save</button>
        </div>
    );
}
