import { useState } from "react";
import {  useHistory } from "react-router-dom";
import { url } from "../common/constants";
import axios from "axios";
import Swal from "sweetalert2";

const AddCaters = () => {
  const history = useHistory();
  const [name, setname] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [speciality, setspeciality] = useState("");
  const token = JSON.parse(localStorage.getItem("jwttoken"));

  const HandleAddCaters = () => {

    // Validation for Contact Number
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

    const cater = {
      name,
      contactNumber,
      speciality,
    };
    console.log(cater);
    axios
      .post(url + "/addcater", cater, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("Printing Caters data", response.data);
        Swal.fire("Caterer Added Successfully", "", "success");
        history.goBack();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
        Swal.fire({
          icon: "error",
          title: "Fill all details",
          text: "",
          footer: "",
        });
      });
  };

  return (
    <div className="forms-container">
      <div className="container py-5 text-white my-5">
        <div colSpan="2" className="fw-bold p-3 mt-2 display-6">
          Add Caterer
        </div>
        <div className="my-3 row justify-content-center align-content-center">
          <div className="col-2">
            <label htmlFor="name" className="form-label fs-4">
              Caterer Name
            </label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mb-3 row justify-content-center align-content-center">
          <div className="col-2">
            <label htmlFor="contact" className="form-label fs-4">
              Contact
            </label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="contact"
              onChange={(e) => {
                setcontactNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center align-content-center">
          <div className="col-2">
            <label htmlFor="speciality" className="form-label fs-4">
              Speciality
            </label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="speciality"
              onChange={(e) => {
                setspeciality(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="py-2">
          <button
            type="submit"
            className="btn btn-l w-25"
            onClick={HandleAddCaters}
          >
            ADD CATERER
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCaters;
