import React from 'react'
import { Link } from 'react-router-dom'

const TransactionHeading = () => {
  return (
    <div>
        <nav className="container-fluid   py-2 rounded-nav" style={{color: "#1d2025"}}>
            <div className="create-bdgt d-flex align-items-center ">
                <Link to=""><button className="btn btn-close"></button></Link>
                <h2 className="fs-6 fw-bold ps-2 mb-0 ">Add transaction</h2>
            </div>
        </nav>
    </div>
  )
}

export default TransactionHeading