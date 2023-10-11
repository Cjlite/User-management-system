import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import "./SignIn.css"

function SignIn() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        // if (!values.email || !values.pass) {
        //     setErrorMsg("Fill all fields");
        //     return;
        // }
        // setErrorMsg("");

        // setSubmitButtonDisabled(true);
        // signInWithEmailAndPassword(auth, values.email, values.pass)
        //     .then(async (res) => {
        //         setSubmitButtonDisabled(false);

        //         navigate("/home");
        //     })
        //     .catch((err) => {
        //         setSubmitButtonDisabled(false);
        //         setErrorMsg(err.message);
        //     });
        navigate("/dashboard");
    };
    return (
        <div className="signin_container">
            <div className="innerBox">
                <h1 className="heading">Login</h1>

                <InputControl
                    label="Email"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="Enter email address"
                />
                <InputControl
                    label="Password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    }
                    placeholder="Enter Password"
                />

                <div className="footer">
                    <b className="error">{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                        Login
                    </button>
                    <p>
                        If you are not Sign up ?{" "}
                        <span>
                            <Link to="/">Sign up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;