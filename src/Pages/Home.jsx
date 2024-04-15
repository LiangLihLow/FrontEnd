import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/login");
    };

    return (
        <Panel title="Welcome">
            <MyButton onClick={handleSignInClick}>Sign-in</MyButton>
        </Panel>
    );
}


function Panel({ title, children }) {
    return (
        <section className="panel">
            <h1 className="title">{title}</h1>
            {children}
        </section>
    );
}

function MyButton({ children, onClick }) {
    return (
        <button className="my-Button" onClick={onClick}>
            {children}
        </button>
    );
}
