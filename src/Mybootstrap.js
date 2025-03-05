import React from 'react'

function Mybootstrap() {
    return (
        <div className='container border'>
            <div className='row'>
                <div className='col-12'>
                    <h1>this is bootstrap</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card" >
                        <img src="photo/img1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div class="card" >
                        <img src="photo/img1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div class="card" >
                        <img src="photo/img1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div class="card" >
                        <img src="photo/img1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Mybootstrap

export function Inlinecsstyle()
{
    const a = 20;
    let abc = "blue";
    return(
        <h1 style={{fontSize:a,color:'red',backgroundColor:abc}}>inline css use </h1>
    )
}

