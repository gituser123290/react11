import React, { useEffect, useState } from 'react'
import { FcAlarmClock ,FcHome } from "react-icons/fc";
import { CiGlobe } from "react-icons/ci";

function Mycondition() {

    const [month,setmonth]=useState("feb");

    const changemonth = (e)=>{
        setmonth(e.target.value);
    }

    const wlecome = ()=>{
        alert("welcome to load function");
    }
    useEffect(()=>{
        wlecome();
    },[])




    if (month ==="jan") {
        return (
            <div className='container bg-primary p-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1><FcAlarmClock/> this is first condition {month}</h1>
                        <select onChange={changemonth}>
                            <option>jan</option>
                            <option>feb</option>
                            <option>march</option>
                            <option>apr</option>
                            <option>dec</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    else if (month === "feb") {
        return (
            <div className='container bg-danger p-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1> <FcHome/>this is second condition {month}</h1>
                        <select onChange={changemonth}>
                            <option>jan</option>
                            <option>feb</option>
                            <option>march</option>
                            <option>apr</option>
                            <option>dec</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    else if (month === "march") {
        return (
            <div className='container bg-success p-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1> <CiGlobe/>this is third condition {month}</h1>
                        <select onChange={changemonth}>
                            <option>jan</option>
                            <option>feb</option>
                            <option>march</option>
                            <option>apr</option>
                            <option>dec</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='container bg-warning p-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Error page, this is not valid {month}</h1>
                        <select onChange={changemonth}>
                            <option>jan</option>
                            <option>feb</option>
                            <option>march</option>
                            <option>apr</option>
                            <option>dec</option>
                        </select>
                    </div>
                </div>
            </div>
        )

    }


}

export default Mycondition