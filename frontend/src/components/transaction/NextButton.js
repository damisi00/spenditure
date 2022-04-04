import React from 'react'
import { Link } from 'react-router-dom'

const NextButton = () => {
  return (
    <div>
        <Link to="" className="btn-forward-arrow btn ms-3 align-self-end d-flex align-items-center justify-content-center p-2">
                    <svg width="13" height="14" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.63379 20L11.2736 11L1.63379 2" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
        </Link>
    </div>
  )
}

export default NextButton