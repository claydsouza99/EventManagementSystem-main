import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import Swal from 'sweetalert2';

const AddStudio = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("")
    const token=JSON.parse(localStorage.getItem("jwttoken"));

    const HandleAddStudio = () => {
        const studio={
            name,
            contact,
        }

    // Validation for Contact Number
    const contactNumberPattern = /^\d{10}$/;
    if (!contactNumberPattern.test(contact)) {
        Swal.fire({
        icon: "error",
        title: "Invalid Contact Number",
        text: "Contact number should be a 10-digit number",
        footer: "",
        });
        return;
    }

    const hasSameDigits = /^\d{1}(\d)\1+$/;
    if (hasSameDigits.test(contact)) {
        Swal.fire({
        icon: "error",
        title: "Invalid Contact Number",
        text: "Contact number should not have repeating same digits",
        footer: "",
        });
        return;
    }

        console.log(studio)
        axios.post(url + "/addstudio",studio,{headers:{"authorization":`Bearer ${token}`}})
            .then(response => {
                console.log('Printing studio data', response.data);
                Swal.fire(
                    'Studio Added Successfully',
                    '',
                    'success'
                  )
                  history.goBack();

            })
            .catch(error => {
                console.log('Something went wrong', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Fill all details',
                    text: '',
                    footer: ''
                  })
            })
            
    }

    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 mt-2 display-6">
                    Add Studio
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="name" className="form-label fs-4">Studio Name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setname(e.target.value) }} />
                    </div>
                </div>
            
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Contact</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setcontact(e.target.value) }} />
                    </div>
                </div>
                <div className="py-2">
                <button type="submit" className="btn btn-l w-25" onClick={HandleAddStudio}>ADD STUDIO</button>
                </div>
            </div>
        </div >
    );
}

export default AddStudio;
