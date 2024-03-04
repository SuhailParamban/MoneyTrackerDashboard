import Chart from '../Chart/index'
import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-col py-12 px-14 space-y-6'>
        <h2>Dashboard</h2>

        <div className='flex space-x-8'>
            <div className='flex flex-col justify-center p-4  w-2/5 h-[150px] border   rounded '>
                <span>Suhail</span>
                <span className='text-gray-500'>Your balance : 1000000 Rs.</span>
            </div>
            <div className='flex flex-col justify-center p-4 w-2/5 h-[150px] border   rounded '>
                <span>Suhail</span>
                <span className='text-gray-500'>Your balance : 1000000 Rs.</span>
            </div>
        </div>

        <div className='flex space-x-8 w-4/5 flex-col'>
            <h2>Expence chart</h2>
            <Chart />
        </div>

        <div className='flex space-x-8'>
            <div className='flex flex-col justify-center p-4  w-2/5 h-[150px] border   rounded '>
                <span>Your Activity</span>
                <li className='mt-3 text-gray-500'>hjsdfhkjsdhkjsdhfkj</li>
                <li className='mt-3 text-gray-500'>hjsdfhkjsdhkjsdhfkj</li>
            </div>
            <div className='flex flex-col justify-center p-4  w-2/5 h-[150px] border   rounded '>
                <span>Pending Bills</span>
                <li className='mt-3 text-gray-500'>hjsdfhkjsdhkjsdhfkj</li>
            </div>
        </div>
    </div>
  )
}

export default Dashboard