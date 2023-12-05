import "./loginStyle.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navi = useNavigate();
  async function submit(e) {
    e.preventDefault();
    if (email === "") {
      console.log("email needed");
    } else if (password === "") {
      console.log("password needed");
    } else {
      // notify();

      try {
        const response = await axios.post("http://localhost:5050/user/login", {
          email,
          password,
        });
        if (response.data.msg === "user login successfull") {
          toast.success("login successful", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setTimeout(() => {}, 2000);

          const data = response.data;
          localStorage.setItem("token", data.token);
        } else if (response.data.msg === "enter correct password") {
          toast.error("pass incorrect", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("pass not correct");
        } else {
          toast.error("email not correct", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <div className="loginform">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="login">
            <form className="form">
              <label htmlFor="chk" aria-hidden="true">
                Log in
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button onClick={submit}>Log in</button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
