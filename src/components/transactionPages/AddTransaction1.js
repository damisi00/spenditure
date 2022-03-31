import React from 'react'
import { Link } from 'react-router-dom'
import ForwardArrow  from '../../images/forward-arrow'
import AddTransaction from '../../images/add-transaction'
import '../../index.css'

const AddTransaction1 = () => {
  return (
    <div>
        <nav className="container-fluid   py-2 rounded-nav" style={{color: "#1d2025"}}>
            <div className="create-bdgt d-flex align-items-center ">
                <Link to=""><button className="btn btn-close"></button></Link>
                <h2 className="fs-6 fw-bold ps-2 mb-0 ">Add transaction</h2>
            </div>
        </nav>
        <main className="text-start pt-1 pb-5 d-flex flex-column align-item-center empty-budget-main w-90  mx-auto">
            <div className="py-5  empty-budget-main w-50 mx-auto">
                <img src={AddTransaction} className="img-fluid" alt="" />
            </div>
            <h6 className="fw-light opacity-80 fw-bold p-2 w-50 fs-6">What kind of transaction is it?</h6>
            <section className="category-container d-flex justify-content-between py-3 mb-4">
                <button type="button" className="bank-cat btn p-3 d-flex flex-column align-items-start justify-content-between">
                    <svg width="30" height="30" viewBox="0 0 39 36"  xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" fill="#41dc65" clip-rule="evenodd" d="M19.4144 36C29.6825 36 38.0065 27.9411 38.0065 18C38.0065 8.05887 29.6825 0 19.4144 0C9.14623 0 0.822266 8.05887 0.822266 18C0.822266 27.9411 9.14623 36 19.4144 36Z" />
                        <path fill-rule="evenodd"  clip-rule="evenodd" d="M26.035 22.59L21.294 18L26.035 13.41L24.5786 12L18.3813 18L24.5786 24L26.035 22.59ZM13.2168 12H15.2826V24H13.2168V12Z" fill="#DEDEDF"/>
                    </svg>
                    <p className="fw-bold mb-0 fs-7">Income</p>
                </button>
                <button type="button" className="bank-cat btn p-3 d-flex flex-column align-items-start justify-content-between">
                
                    <img src={ForwardArrow} alt="forward button"  width="30px" />
                    <p className="fw-bold mb-0 fs-7">Expense</p>
                </button>
            </section>
        </main>
    </div>
  )
}

export default AddTransaction1