import React from 'react'
import pic from '../../Assets/pic.jpg'
import './Home.css'
function Home() {
  return (

    <div className='row'>
      <div className="col-md-6">
        <div className="content d-flex flex-column m-5">
          <h1 className='m-3 mb-1'>Track Your Income and Expenses in One Place</h1>
          <p className='m-4'>Wondering where all your money goes each month? Tired of
            complicated budgeting software? Try our Simple Income &
            Expenses Tracker Application, the simple way to track your
            income and expenses in one place</p>
          <div className='d-flex'>
            <button className='button bg-success'>Get a Demo</button>
            <button className='button'>Sign up</button>
          </div>


        </div>
      </div>
      <div className="col-md-6">
        <div className="pic1 d-flex">
          <img src={pic} alt="pic" className='img-fluid pic m-2' />
        </div>
      </div>
    </div>


  )
}

export default Home


