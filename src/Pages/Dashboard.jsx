import React from "react";
import Input from "../Contents/UserInput";
import { InputProvider } from "../Contents/InputContext";
import TotalBalance from "../Contents/UserBalance";
import ArrayContent from "../Contents/ArrayContent";
import ThemeContext from "../Contents/ThemeContext";
import { useContext } from "react";


export default function Dashboard() {
    const theme = useContext(ThemeContext)
    document.body.className = `dashboard-${theme}`;
    return (
        <InputProvider>
            <div className="dashboard">
                <TotalBalance />
                <Input />
                <ArrayContent />
            </div>
        </InputProvider>
    );
}

