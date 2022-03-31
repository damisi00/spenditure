import React from 'react'
import BudgetHeader from './BudgetHeader'
import BudgetNav from './BudgetNav'
import NoBudget from '../../images/no-budget'
import '../../index.css'

const EmptyBudget = () => {
  return (
    <div className="bg-light">
        <BudgetNav />
        <BudgetHeader />
        <main className="text-center py-5 d-flex flex-column align-item-center empty-budget-main">
            <div className="">
                <img src={NoBudget} className="img-fluid" alt="No budget graphics"/>  
            </div>
            <div className="py-5 w-75 mx-auto" style={{color: "#1d2025"}}>
                <h2 className="fw-bolder">No budget made yet</h2>
                <p className="fw-lighter pt-2">You can add budget by tapping the + button below</p>
            </div>

        </main>
    </div>
  )
}

export default EmptyBudget