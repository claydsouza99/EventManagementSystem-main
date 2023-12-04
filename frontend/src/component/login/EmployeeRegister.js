import React, { useState } from "react";
import axios from "axios";
import "./LoginRegister.css";
import register from "../../images/register.svg";
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const EmployeeRegister = () => {
  const history = useHistory();
  const loginrole = localStorage.getItem("role");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [dob, setdob] = useState("");
  const [adharNumber, setadharNumber] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [role, setrole] = useState("");
  const [salary, setsalary] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  const registerCustomer = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !contactNumber ||
      !dob ||
      !adharNumber ||
      !accountNumber ||
      !role ||
      !salary ||
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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

    // Validation for Account Number
    const accountNumberPattern = /^\d+$/;
    if (!accountNumberPattern.test(accountNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Account Number",
        text: "Account number should contain only numerical digits",
        footer: "",
      });
      return;
    }
    // Validation for Salary
    const salaryPattern = /^\d+(\.\d+)?$/;
    if (!salaryPattern.test(salary)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Salary",
        text: "Salary should be a numerical value (decimal allowed)",
        footer: "",
      });
      return;
    }

    if (password == cPassword && password.length > 5) {
      const customer = {
        name,
        email,
        contactNumber,
        dob,
        adharNumber,
        accountNumber,
        password,
        role,
        salary,
      };
      toast.info("Registering Your Details, Please wait for a while.....");
      axios
        .post(url + "/registration", customer)
        .then((Response) => {
          console.log(Response.data);
          Swal.fire(" You are Registered Successfully", "", "success");
          history.push("/manager/viewemployees");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Please fill all the Details",
            text: "",
            footer: "",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title:
          "Please Check Confirm Password should be same as Password and Password Length should be greater than 5",
        text: "",
        footer: "",
      });
    }
  };
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup-mod mt-5">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Register New Employee</h2>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <input
                        type="text"
                        className="input-fields-mod"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        type="email"
                        className="input-fields-mod"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="input-fields-mod"
                        placeholder="Enter Contact Number"
                        value={contactNumber}
                        onChange={(e) => {
                          setcontactNumber(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="input-fields-mod"
                        placeholder="Enter Date of Birth"
                        value={dob}
                        onChange={(e) => {
                          setdob(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        type="text"
                        className="input-fields-mod"
                        placeholder="Enter Aadhar Number"
                        value={adharNumber}
                        onChange={(e) => {
                          setadharNumber(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        type="text"
                        className="input-fields-mod"
                        placeholder="Enter Account Number"
                        value={accountNumber}
                        onChange={(e) => {
                          setaccountNumber(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {loginrole == "MANAGER" ? (
                        <select
                          name="roles"
                          id="roles"
                          className="input-fields-mod"
                          onChange={(e) => {
                            setrole(e.target.value);
                          }}
                        >
                          <option value="" hidden>
                            Choose Role
                          </option>
                          <option value="EMPLOYEE">EMPLOYEE</option>
                          <option value="MANAGER">MANAGER</option>
                        </select>
                      ) : (
                        <select
                          name="roles"
                          id="roles"
                          className="input-fields-mod"
                          onChange={(e) => {
                            setrole(e.target.value);
                          }}
                        >
                          <option value="" hidden>
                            Choose Role
                          </option>
                          <option value="EMPLOYEE">EMPLOYEE</option>
                          <option value="MANAGER">MANAGER</option>
                          <option value="ADMIN">ADMIN</option>
                        </select>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-fields-mod"
                        placeholder="Enter Salary"
                        value={salary}
                        onChange={(e) => {
                          setsalary(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        type="password"
                        className="input-fields-mod"
                        placeholder="Enter New Password"
                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        type="password"
                        className="input-fields-mod"
                        placeholder="Confirm Password"
                        value={cPassword}
                        onChange={(e) => {
                          setCpassword(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <input
                type="submit"
                className="btn-l"
                value="Register"
                onClick={registerCustomer}
              />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h1 className="pt-5 pb-3">Onboarding Employee</h1>
            </div>
            <img src={register} className="image-l" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegister;
