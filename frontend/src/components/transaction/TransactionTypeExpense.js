import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
import NextButton from './NextButton'

const TransactionTypeExpense = () => {
  return (
    <div>
        <nav className="container-fluid   py-2 rounded-nav" style={{color: "#1d2025"}}>
            <div className="create-bdgt d-flex align-items-center ">
                <Link to=""><button className="btn btn-close"></button></Link>
                <h2 className="fs-6 fw-bold ps-2 mb-0 ">Add transaction</h2>
            </div>
        </nav>
        <main className="mt-3 w-90 mx-auto">
            <div className="my-5 d-flex align-items-center">
                
                <svg width="39" height="36" viewBox="0 0 39 36" className=" d-flex align-items-center justify-content-center me-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4144 36C29.6825 36 38.0065 27.9411 38.0065 18C38.0065 8.05887 29.6825 0 19.4144 0C9.14623 0 0.822266 8.05887 0.822266 18C0.822266 27.9411 9.14623 36 19.4144 36Z" fill="#FF5460"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M12.7941 22.59L17.5351 18L12.7941 13.41L14.2505 12L20.4478 18L14.2505 24L12.7941 22.59ZM25.6123 12H23.5465V24H25.6123V12Z" />
                </svg>
                <div className="text-start">
                    <p className="budget-label opacity-40 mb-1">Transaction type</p>
                    <h4 className="fs-6 fw-bold">Expense</h4>
                </div>
            </div>
            <form id="" className="my-5 pt-5 d-flex align-items-center justify-content-between w-80">

                <div className="create-bdgt-name ">
                        <label for="enter-payee-name" className="form-label budget-label fw-bold ">Payee name</label>
                        <input type="text" className="form-control py-1 px-0" placeholder="Enter payee name" id="enter-payee-name" required />
                </div>
                <NextButton />
            </form>

        </main>
    </div>
  )
}

export default TransactionTypeExpense