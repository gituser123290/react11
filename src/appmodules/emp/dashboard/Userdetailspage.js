import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Userdetailspage() {
    const { id } = useParams();
    const [user, setUserDetails] = useState([])

    useEffect(() => {
        const fetchuser = () => {
            axios.get(`https://dummyjson.com/users/${id}`)
                .then((d) => {
                    setUserDetails(d.data);
                })
                .catch((error) => console.error("Error fetching user data:", error));
        };

        fetchuser();
    }, [id]);



    return (
        <div className='container'>
            <div className='row p-3 bg-dark'>
                <div className='col-12 g-0'>
                    <Link to="/empmainpage/myaxios" className='btn btn-info text-white float-start'><IoArrowBackCircleSharp />Back</Link>
                </div>
            </div>
            <div className='row border bg-color mt-2 rounded mb-2'>
                <div className="container mt-4">
                    <div className="row">
                        <h2>User :{user.firstName} ({user.maidenName}) {user.lastName}</h2>
                        <div className='col-md-2 border rounded-circle bg-danger'>
                            <img src={user.image} alt="Profile" className="img-fluid rounded-circle mb-3" />
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <p><strong>Last Name:</strong> {user.maidenName} {user.lastName} </p>
                                <p><strong>Age:</strong> {user.age}</p>
                                <p><strong>Gender:</strong> {user.gender}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                {/* <p><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</p> */}
                                <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                            </div>
                            <div className='col-md-4'>
                                <p><strong>Height:</strong> {user.height} cm</p>
                                <p><strong>Weight:</strong> {user.weight} kg</p>
                                <p><strong>Eye Color:</strong> {user.eyeColor}</p>
                                {/* <p><strong>Hair:</strong> {user.hair.color} ({user.hair.type})</p> */}
                                {/* <p><strong>Company:</strong> {user.company.name} - {user.company.title} ({user.company.department})</p> */}
                                {/* <p><strong>Crypto Wallet:</strong> {user.crypto.wallet} ({user.crypto.coin}, {user.crypto.network})</p> */}
                                <p><strong>University:</strong> {user.university}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdetailspage