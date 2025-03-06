import React,{useState} from 'react'

function Mystate() {
  const [sv , sf]=useState("ravi");
   const myupdate = ()=>{
        sf("mohan");
   }
   const abc = (a)=>{
    console.log(a.target.value);
    sf(a.target.value);
   }

const [bc, ubc]=useState("red");
   const changeback = (c)=>{
        ubc(c.target.value)
   }


    return (
    <div className='container' style={{backgroundColor:bc}}>
        <div className='row'>
            <div className='col-md-6'>
                <input type='text' value={sv}/>
                
            </div>
            <div className='col-md-6'>
                <h2>{sv}</h2>
                <input type='button' value="update" onClick={myupdate}/>

                <input type='text' value={sv} onInput={abc}/>
                <input type='color' value={bc} onChange={changeback}/>
            </div>
        </div>
    </div>
  )
}

export default Mystate