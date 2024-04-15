import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Pages.css"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contents/AuthContent";
import { useContext } from "react";

export default function LogIn() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    function userLogin() {
        const correctUsername = userName === "test"
        const correctPassword = password === "1234"
        if (correctUsername && correctPassword) {
            authContext.setToken("1234")
            navigate("/login/dashboard")
        } else {
            alert("Invalid username or password")
        }
    }

    return (
        <Container className="input-container">
            <h1>Login to your account</h1>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="NameInput" className="label">Username <i>(test)</i></Form.Label>
                    <Form.Control
                        id="NameInput"
                        type="text"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder="Add username without space"
                        className="input-field"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label">Password <i>(1234)</i></Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="input-field"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-button" onClick={userLogin}>
                    Log-In
                </Button>
            </Form>
        </Container>
    );
}
