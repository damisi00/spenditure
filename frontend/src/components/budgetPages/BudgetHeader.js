import React from 'react'
import Plus from '../../images/plus'
import Search from '../../images/Search-icon'
import { Link } from 'react-router-dom'
import '../../index.css'


const BudgetHeader = () => {
  return (
    <div>
        <header className="container-fluid empty-budget-header mb-3" style={{backgroundColor: "#dededf", color: "#1d2025"}}>
            <div className="  pt-1 pb-2 d-flex justify-content-between container-fluid">
                <h2 className="fw-bold ">Budget</h2>
                <div className="w-20  d-flex justify-content-between align-item-center">
                    <Link to="./new-budget"><img src={Plus} alt="plus/add icon" /></Link>
                    <Link to=""><img src={Search} width="15px" alt="search icon"/></Link>
                </div>
            </div>
            <div className=" d-flex justify-content-between  overflow-auto" >
                <p className="year" >2018</p>
                <p className="year" >2019</p>
                <p className="year" >2020</p>
                <p className="year" >2021</p>
                <p className="year" >2022</p>
                <p className="year" >2023</p>
                <p className="year" >2024</p>
                <p className="year" >2025</p>
                
            </div>
            <div className="mnth pb-3 overflow-auto justify-content-between d-flex">
                <button type="button" className="btn btn-sm">Jan</button>
                <button type="button" className="btn btn-sm   ">Feb</button>
                <button type="button" className="btn btn-sm   ">Mar</button>
                <button type="button" className="btn btn-sm   ">Apr</button>
                <button type="button" className="btn btn-sm   ">May</button>
                <button type="button" className="btn btn-sm   ">Jun</button>
                <button type="button" className="btn btn-sm   ">Jul</button>
                <button type="button" className="btn btn-sm   ">Aug</button>
                <button type="button" className="btn btn-sm   ">Sep</button>
                <button type="button" className="btn btn-sm   ">Oct</button>
                <button type="button" className="btn btn-sm   ">Nov</button>
                <button type="button" className="btn btn-sm   ">Dec</button>
            </div>
        </header>
    </div>
  )
}

export default BudgetHeader