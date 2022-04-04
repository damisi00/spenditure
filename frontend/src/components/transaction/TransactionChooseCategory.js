import React from 'react'
import Bank2 from  '../../images/bank2'
import CardIcon from  '../../images/card-icon'
import TransactionHeading from './TransactionHeading'

const TransactionChooseCategory = () => {
  return (
    <div>
        <TransactionHeading />
        <main className="mt-3 w-90 mx-auto">
            <div className="mb-3 mt-5 d-flex align-items-center">
                <svg width="39" height="36" viewBox="0 0 39 36" className=" d-flex align-items-center justify-content-center me-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4144 36C29.6825 36 38.0065 27.9411 38.0065 18C38.0065 8.05887 29.6825 0 19.4144 0C9.14623 0 0.822266 8.05887 0.822266 18C0.822266 27.9411 9.14623 36 19.4144 36Z" fill="#FF5460"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M12.7941 22.59L17.5351 18L12.7941 13.41L14.2505 12L20.4478 18L14.2505 24L12.7941 22.59ZM25.6123 12H23.5465V24H25.6123V12Z" />
                </svg>
                <div className="text-start">
                    <p className="budget-label opacity-40 mb-1">Transaction type</p>
                    <h4 className="fs-6 fw-bold">Expense</h4>
                </div>
            </div>
            <div className="d-flex  align-items-center mb-5  w-90 me-auto">
                <div className="rounded-circle me-2" style= {{backgroundColor:" #1d2025", width: "35px", height: "35px"}}></div>
                <div className="text-start">
                    <p className="budget-label opacity-40 mb-1">Payee</p>
                    <h4 className="fs-6 fw-bold">Motorbike engine oil</h4>
                </div>
            </div>
            
            <section className=" py-5">
                <h6 className="fw-bold opacity-75 p-2">Choose category</h6>
                <div className="category-container d-flex justify-content-between">
                    <button type="button" className="bank-cat btn p-3 d-flex flex-column align-items-start justify-content-between">
                        <div className="bank-icon-con rounded-circle">
                        <img src={Bank2} alt="bank icon"  width="30px" />
                        </div>
                        <p className="fw-bold mb-0">Bank</p>
                    </button>
                    <button type="button" className="bank-cat btn p-3 d-flex flex-column align-items-start justify-content-between">
                        <div className="bank-icon-con rounded-circle">
                        <img src={CardIcon} alt="bank icon"  width="30px" />
                        </div>
                        <p className="fw-bold mb-0">Card</p>
                    </button>
                </div>
                
            </section>
        

        </main>
    </div>
  )
}

export default TransactionChooseCategory