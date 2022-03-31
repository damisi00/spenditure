import React from 'react'
import { Link } from 'react-router-dom'
import Bank2 from '../images/bank2'
import Search from '../../images/Search-icon'
import CardIcon from '../../images/card icon'
import '../../index.css'

const NewBudget = () => {
  return (
    <div>
         <header className="container-fluid  d-flex justify-content-between align-items-center py-2 mb-3" style={{backgroundColor: "#dededf", color: "#1d2025"}}>
            <div className="create-bdgt d-flex align-item-center ">
                <Link to="./budget"><img src="../Images/short back arrow.svg" alt="back arrow icon" /></Link>
                <h2 className="fs-6 fw-bold ps-2 mb-0 align-self-end">Create budget</h2>
            </div>
            <img src={Search} width="14px" alt="search icon" />
        </header>
        <main className="text-start pt-1 pb-5 d-flex flex-column align-item-center empty-budget-main w-90  mx-auto">
        <h6 className="fw-light opacity-75 py-2">Choose category</h6>
        <section className="category-container d-flex justify-content-between py-3">
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
            </section>
            <form id="create-budget">
                <div className="create-bdgt-name pb-4">
                    <label for="create-bdgt-name" className="form-label budget-label fw-bold ">Budget name</label>
                    <input type="text" className="form-control py-1 px-0" placeholder="Enter budget name" id="create-bdgt-name" required />
                </div>
                <div className="w-60 pb-5">
                    <div className="create-bdgt-name pb-3">
                        <label for="enter-bdgt" className="form-label budget-label fw-bold ">Enter budget</label>
                        <input type="text" className="form-control py-1 px-0" placeholder="$0,0000.00" id="enter-bdgt" required />
                    </div>
                    <div className="create-bdgt-name ">
                        <label for="bdgt-duration" className="form-label budget-label fw-bold ">Budget duration</label>
                        <select className="form-select ps-0 py-1"  id="bdgt-duration" required>
                            <option selected placeholder="1 month">1 month</option>
                            <option value="1">1 month</option>
                            <option value="2">3 months</option>
                            <option value="3">6 months</option>
                            <option value="4">12 months</option>
                        </select>
                    
                    </div>
                </div>
                <button type="submit" className="btn bdgt-submit my-5 w-100">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default NewBudget