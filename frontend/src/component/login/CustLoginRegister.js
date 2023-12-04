import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginRegister.css";
import authHeader from "../services/auth-header";
import log from "../../images/log.svg";
import register from "../../images/register.svg";
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
toast.configure();

const CustLoginRegister = () => {
  const history = useHistory();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [dob, setdob] = useState("");
  const [adharNumber, setadharNumber] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const role = "CUSTOMER";
  const [error, seterror] = useState("");
  const [errortype, seterrortype] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long and include at least one uppercase letter, one digit, and one special character.",
      });
      return;
    }
    const customer = { email, password };
    axios
      .post(url + "/login", customer, { authHeader })
      .then((Response) => {
        if (Response.data.jwt)
          localStorage.setItem("jwttoken", JSON.stringify(Response.data.jwt));
        if (Response.data.role == "[ROLE_CUSTOMER]") {
          localStorage.setItem("role", "CUSTOMER");
          history.push("/customer/welcome");
        } else {
          setemail("");
          setpassword("");
          seterror("INVALID CREDENTIALS OR AUTHORITY"); 
          seterrortype("alert-box"); 
          console.log("Something went wrong", error);
        }
      })
      .catch((error) => {
        setemail("");
        setpassword("");
        seterror("INVALID CREDENTIALS"); 
        seterrortype("alert-box");
        console.log("Something went wrong", error);
      });
  };

  const registerCustomer = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !contactNumber ||
      !adharNumber ||
      !password ||
      !cPassword
    ) {
      Swal.fire({
        icon: "error",
        title: "Please fill all the details",
        text: "",
        footer: "",
      });
      return;
    }

    // Validating Name
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Name should only contain alphabetical characters",
        footer: "",
      });
      return;
    }

    // Validating Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address",
        footer: "",
      });
      return;
    }

    // Validating password
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
    Swal.fire({
    icon: "error",
    title: "Invalid Password",
    text: "Password must be at least 6 characters long and include at least one uppercase letter, one digit, and one special character.",
    footer: "",
    });
    return;
    }

    // Validating Date of Birth
  const currentDate = new Date();
  const [year, month, day] = dob.split("-").map(Number);
  const dobDate = new Date(year, month - 1, day); 
  const age = Math.floor((currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000));

  if (age < 18) {
    Swal.fire({
      icon: "error",
      title: "Invalid Date of Birth",
      text: "You must be at least 18 years old to register.",
      footer: "",
    });
    return;
  }

    // Validating Contact Number
    const contactNumberPattern = /^\d{10}$/;
    if (!contactNumberPattern.test(contactNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Contact Number",
        text: "Contact number should be a 10-digit number",
        footer: "",
      });
      return;
    }
    const hasSameDigits = /^\d{1}(\d)\1+$/;
    if (hasSameDigits.test(contactNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Contact Number",
        text: "Contact number should not have repeating same digits",
        footer: "",
      });
      return;
    }

    // Validating Aadhar Number
    const adharNumberPattern = /^\d{12}$/;
    if (!adharNumberPattern.test(adharNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Aadhar Number",
        text: "Aadhar number should be a 12-digit number",
        footer: "",
      });
      return;
    }

    if (password.length > 5) {
      if (password === cPassword) {
        const customer = {
          name,
          email,
          contactNumber,
          dob,
          adharNumber,
          password,
          role,
        };
        toast.info("Registering Your Details, Please wait for a while.....");
        axios
          .post(url + "/registration", customer)
          .then((Response) => {
            Swal.fire(" You are Registered Successfully", "", "success");
            history.push("/customer");
            const container = document.querySelector(".container-l");
            container.classList.remove("sign-up-mode");
          })
          .catch((error) => {
            console.log("Test error");
            Swal.fire({
              icon: "error",
              title: "Please fill all the Details",
              text: "",
              footer: "",
            });
          });
      } else {
        console.log("invalid password not matched");
        Swal.fire({
          icon: "error",
          title: "Confirm Password should be the same as Password",
          text: "",
          footer: "",
        });
      }
    } else {
      console.log("invalid password length");
      Swal.fire({
        icon: "error",
        title: "Password Length should be greater than 5",
        text: "",
        footer: "",
      });
    }
  };

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn"); 
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container-l");
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode"); 
    });
  });
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Sign In</h2>
              <input
                type="text"
                className="input-fields-l"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="password"
                className="input-fields-l"
                minLength={6}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                type="submit"
                value="Login"
                className="btn-l solid"
                onClick={login}
              />
              <Link className="btn text-white" to={"/forgotpassword"}>
                Forgot Password ?
              </Link>
              <div className={errortype} role="alert">
                {error}
              </div>
            </form>
            <form className="sign-up-form l-form">
              <h2 className="title fw-bold">Sign Up</h2>
              <input
                type="text"
                className="input-fields-r"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="email"
                className="input-fields-r"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="text"
                className="input-fields-r"
                placeholder="Enter Contact Number"
                value={contactNumber}
                onChange={(e) => {
                  setcontactNumber(e.target.value);
                }}
              />
              <input
                type="date"
                className="input-fields-r"
                placeholder="Enter Date of Birth"
                value={dob}
                onChange={(e) => {
                  setdob(e.target.value);
                }}
              />
              <input
                type="text"
                className="input-fields-r"
                placeholder="Enter Aadhar Number"
                value={adharNumber}
                onChange={(e) => {
                  setadharNumber(e.target.value);
                }}
              />
              <input
                type="password"
                className="input-fields-r"
                minLength={6}
                placeholder="Enter New Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                type="password"
                className="input-fields-r"
                minLength={6}
                placeholder="Confirm Password"
                value={cPassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
              />
              <input
                type="submit"
                className="btn-l"
                value="Sign up"
                onClick={registerCustomer}
              />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">New here ?</h2>
              <button className="btn btn-l transparent w-100" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src={log} className="image-l" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">One of us ?</h2>
              <button className="btn btn-l transparent w-100" id="sign-in-btn">
                Sign In
              </button>
            </div>
            <img src={register} className="image-l" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustLoginRegister;
