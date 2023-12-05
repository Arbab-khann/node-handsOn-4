import "./loginStyle.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navi = useNavigate();

  // const notify = () => toast("resister successful");

  async function submit(e) {
    e.preventDefault();
    if (name === "") {
      toast.error("Fill all details", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // console.log("name needed");
    } else if (email === "") {
      toast.error("Fill all details", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // console.log("email needed");
    } else if (password === "") {
      toast.error("Fill all details", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // console.log("password needed");
    } else {
      toast.success("register successful", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      try {
        const response = await axios.post(
          "http://localhost:5050/user/register",
          { name, email, password }
        );
        setTimeout(() => {
          navi("/login");
        }, 2000);

        const data = response.data;
        localStorage.setItem("token", data.token);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className="loginform">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="register">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
            />
            <button onClick={submit}>Register</button>
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
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default Register;
