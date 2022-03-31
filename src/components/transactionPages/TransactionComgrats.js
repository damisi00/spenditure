import React from 'react'
import '../../index.css'
import Congratulations from '../../images/Congratulations'

const TransactionComgrats = () => {
  return (
    <div>
        <nav className="container-fluid   py-2 " style={{color: "#1d2025"}}>
            <button className="btn btn-close"></button>
        </nav>
        <main className="text-center pt-1 pb-5  empty-budget-main w-90  mx-auto">
            <section className="align-items-center my-4 justify-content-center flex-column d-flex">
                <img src={Congratulations} alt="Congratulations icon" className=" pb-5" width="35%" />
                <div className="w-75 mx-auto">
                    <h4 className="text-black fs-6 font-light">Congratulations!</h4>
                    <p className="fs-8">Your Bank transaction is added successfully to the app</p>
                </div>
            </section>
            <section className="w-90 me-2 mb-3">
                <div className="text-start my-3 ">
                    <p className="budget-label opacity-40 mb-1">Payee</p>
                    <h4 className="fs-6 fw-bold">Motorbike engine oil</h4>
                </div>
                <div className="text-start d-flex justify-content-between align-items-center w-80 py-3 ">
                    <div className="create-bdgt-name w-50 align-self-center">
                        <p className="budget-label mb-1 opacity-40">Transcation type</p>
                        <h4 className="fs-6 fw-bold">Expense</h4>
                    </div>
                    <div className="create-bdgt-name w-50  ps-4 align-self-end  date-border">
                        <p className="budget-label mb-1  opacity-40">Date</p>
                        <h4 className="fs-6 fw-bold">04-16-19</h4>
                    </div>
                </div>
                <div className="divider d-flex  align-items-center   w-100  py-4">
                
                    <div className="border-dashed opacity-40 w-80 " ></div>
                    <div className="rounded-circle ms-3" style={{ backgroundColor: "#1d2025", width:" 20px", height: "20px"}}></div>
                
                </div>
                <div className="d-flex justify-content-between align-items-center w-80">
                    <div className="text-start">
                        <p className="budget-label mb-1 opacity-40">Amount</p>
                        <h4 className="fs-3 fw-bold">$24.90</h4>
                    </div>
                    <button type="button" className="btn btn-edit px-4 ">Edit</button>

                </div>
            </section>

        </main>
    </div>
  )
}

export default TransactionComgrats