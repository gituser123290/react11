import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCopyright } from "react-icons/fa6";

function Footerpage() {

  return (
    <div className="container-fluid bg1">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <FaRegCopyright/>
        </Link>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><Link className="text-body-secondary" to="#"><FaRegCopyright/></Link></li>
        <li className="ms-3"><Link className="text-body-secondary" to="#"><FaRegCopyright/></Link></li>
        <li className="ms-3"><Link className="text-body-secondary" to="#"><FaRegCopyright/></Link></li>
      </ul>
    </footer>
  </div>
  )
}

export default Footerpage