import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { InputContext } from "./InputContext";
import ThemeContext from "./ThemeContext";


export default function ArrayContent() {
    const { valueArray, setValueArray } = useContext(InputContext);
    const theme = useContext(ThemeContext)

    const deleteTransaction = (index) => {
        const updatedValueArray = valueArray.filter((_, i) => i !== index);
        setValueArray(updatedValueArray);
    };

    return (
        <div>
            <table className={`transaction-table-${theme}`}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Value</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className={`transaction-body-${theme}`}>
                    {valueArray.map((item, index) => (
                        <tr key={index}>
                            <td>{item.transactionName}</td>
                            <td>{item.type === "option1" ? "Income" : "Expense"}</td>
                            <td>{item.transactionValue}</td>
                            <td><FontAwesomeIcon icon={faTimes} onClick={() => deleteTransaction(index)} className="deleteIcon" />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


