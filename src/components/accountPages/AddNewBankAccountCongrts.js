import React from 'react'
import Congratualtions from '../../images/Congratualtions'
import Bank2 from '../../images/bank2'
import '../../index.css'

const AddNewBankAccountCongrts = () => {
  return (
    <div>
        <nav className="container-fluid   py-2 " style={{color: "#1d2025"}}>
            <button className="btn btn-close"></button>
        </nav>
        <main className="text-center pt-1 pb-5  empty-budget-main w-90  mx-auto">
            <section className="align-items-center my-4 justify-content-center flex-column d-flex">
                <img src={Congratualtions} alt="Congratulations icon" className=" pb-5" width="35%"/>
                <div className="w-75 mx-auto">
                    <h4 className="text-black fs-6 font-light">Congratulations!</h4>
                    <p className="fs-8">Your Bank account is added successfully to the app</p>
                </div>
            </section>
            <section className="congratulations-box rounded-3 w-100 mb-5">
                    <div className="d-flex flex-column align-items-start w-90 ms-auto">
                        <div className="d-flex justify-content-between align-items-center  my-3 ">
                            <div className="text-start create-bdgt-name  ">
                                <p className="budget-label mb-0 opacity-40" >Bank name</p>
                                <h4 className="fs-6 fw-bold">United Bank of Africa</h4>
                            </div>
                            <div className="ps-3 ">
                                <img src={Bank2} alt="" className=""/>
                            </div>
                        </div>
                       
                        <div className="text-start d-flex justify-content-between align-items-start w-100 py-3 ">
                            <div className="create-bdgt-name w-50 align-self-center">
                                <p className="budget-label mb-0 opacity-40">Started amount</p>
                                <h4 className="fs-6 fw-bold">$25,000.00</h4>
                            </div>
                            <div className="create-bdgt-name w-50 align-self-center ps-3 date-border">
                                <p className="budget-label mb-0 opacity-40">Date</p>
                                <h4 className="fs-6 fw-bold">04-16-19</h4>
                            </div>
                        </div>
                    </div>
            </section> 
        </main>
    </div>
  )
}

export default AddNewBankAccountCongrts