import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Myaxios() {
    const [users, setusers] = useState([])

    const Myaxiosfunc = () => {
        axios.get('https://dummyjson.com/users').then((d) => {
            console.log(d.data.users);
            setusers(d.data.users);
        })
    };
    useEffect(() => {
        Myaxiosfunc();
    }, [])


    return (
        <div className='container'>
            <div className='row'>
                {users.map((u) => {
                    return (
                        <div className="col-md-3 col-sm-6 mb-3" key={u.id}>
                        <div className="card shadow-sm mt-2">
                            <div className="card-body text-justify">
                                <div className='col-md-2 imgs'>
                                    <img className="img-fluid rounded " src={u.image} alt={u.firstName} />
                                </div>
                                <h6 className="card-subtitle mb-2 text-primary">Name: {u.firstName}</h6>
                                <p className="card-text">
                                    <strong>Gender:</strong> {u.gender} <br />
                                    <strong>Blood Group:</strong> {u.bloodGroup} <br />
                                    <strong>City:</strong> {u.company.address.city}
                                </p>
                                <div>
                                    <Link to={`detailspage/` + u.id} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Myaxios