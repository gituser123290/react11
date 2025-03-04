import React,{Fragment} from "react";
import myimg from './mypictures/img3.jpg';

const imgpath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZHtBFGHVFHUn38ko9teSKzlcpCPniQg16A&s";

function Myabout()

{
    const a = "ravi singh";

    // return <Fragment><h1>this is element return </h1>
    //     <h2>sdfjsdhf</h2>
    //     </Fragment>

    return( <Fragment><h1>this is element return {a} </h1>
        <h2>sdfjsdhf {50+60} {<p>this is:{a} paragraph</p>}</h2>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZHtBFGHVFHUn38ko9teSKzlcpCPniQg16A&s"/> */}
            <img src={imgpath} alt="imagesdjfh"/>
            {/* <img src={imgpath}/> */}
            <img src="photo/img1.jpg" alt="publicimage"/>
            <img src={myimg} alt="srcimage" width={200}/>
            <h1 className="one">this is use of external css link</h1>
        </Fragment>
    )
    
}
export default Myabout                                                                                                                                     