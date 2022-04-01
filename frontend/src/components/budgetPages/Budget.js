import React from 'react'
import BudgetHeader from './BudgetHeader'
import BudgetNav from './BudgetNav'
import '../../index.css'

const Budget = () => {
  return (
    <div>
        <BudgetNav />
        <BudgetHeader />
        <main class="text-center pt-1 pb-5 d-flex flex-column align-item-center empty-budget-main w-90  mx-auto">
            <div class="pb-5">
                <div class="p-3 bdgt-card mb-3">
                    <p class="text-start bdgt-fs mb-1">Budget name</p>
                    <div class="budget-no d-flex justify-content-between align-items-end">
                        <h3 class="fw-bold mb-0">$2440.90 <span class=" bdgt-fs ps-1">50%</span></h3>
                        <p class="bdgt-fs  align-self-end mb-0">$5000.00</p>
                    </div>
                    <div class="bdgt-progress progress mt-3">
                        <div class="progress-bar  bdgt-bar  w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="p-3 bdgt-card mb-3">
                    <p class="text-start bdgt-fs mb-1 ">Budget name</p>
                    <div class="budget-no d-flex justify-content-between align-items-end">
                        <h3 class="fw-bold mb-0">$2440.90 <span class=" bdgt-fs ps-1">79%</span></h3>
                        <p class="bdgt-fs  align-self-end mb-0">$5000.00</p>
                    </div>
                    <div class="bdgt-progress progress mt-3">
                        <div class="progress-bar  bdgt-bar-two  w-75" role="progressbar" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="p-3 bdgt-card">
                    <p class="text-start bdgt-fs mb-1">Budget name</p>
                    <div class="budget-no d-flex justify-content-between align-items-end">
                        <h3 class="fw-bold mb-0">$2440.90 <span class=" bdgt-fs ps-1">42%</span></h3>
                        <p class="bdgt-fs  align-self-end mb-0">$5000.00</p>
                    </div>
                    <div class="bdgt-progress progress mt-3">
                        <div class="progress-bar  bdgt-bar  w-43" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Budget