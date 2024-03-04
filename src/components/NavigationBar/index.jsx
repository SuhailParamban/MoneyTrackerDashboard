import React, { useState } from 'react';
import Logo from '../../assets/logos/logp_1.png'
import { LayoutDashboard,Clock3,BarChart2,ArrowRightLeft,HelpCircleIcon,ChevronRight,ChevronLeft} from 'lucide-react'
import { motion } from "framer-motion"
function NavigationBar() {
    const [isActiveLink, setIsActiveLink] = useState(0)
    const [isExpand, setIsExpand] = useState(true)
    const navLinks =[
        {
            name:'Dashboard',
            icon:LayoutDashboard
        },
        {
            name:'Activity',
            icon:Clock3
        },
        {
            name:'Analytics',
            icon:BarChart2
        },
        {
            name:'Transactions',
            icon:ArrowRightLeft
        },
        {
            name:'Help center',
            icon:HelpCircleIcon
        },
    ]
    const variant ={
        expanded:{width :'20%'},
        nonExpanded:{width :'5%'}
    }
  return (
    <motion.div 
        className={'navigation-bar-container flex flex-col py-12 border border-r-1 w-1/5 h-screen relative ' + (isExpand? ' px-10' : 'px-4')}
        animate={isExpand?'expanded':'nonExpanded'}
        variants={variant}
        >
        <div className='logo-wrapper flex space-x-3 items-center' >
            {/* <img src={Logo} alt="logo image" width={'85px'}/> */}
            <div className={'bg-[#20d79b] rounded flex items-center justify-center text-fuchsia-900  text-2xl font-bold ' + (isExpand? ' w-[55px] h-[55px] ':' w-[45px] h-[45px] ')}>
                 M
            </div>
            <span className={ isExpand?'block' : 'hidden'}>Money tracker</span>
        </div>
        <div 
            onClick={()=>setIsExpand(!isExpand)}
            className='flex items-center justify-center w-8 h-8 rounded-full absolute -right-[16.5px] top-15 bg-[#20d79b]'>

           { isExpand? <ChevronLeft/> : <ChevronRight/> }
        </div>
        <div className='flex flex-col mt-10 space-y-8'>
            {
                navLinks.map((item,index)=>{
                    return(
                        <div 
                            key={index} 
                            className={'flex space-x-3 p-2 rounded' +
                                (
                                    isActiveLink === index && ' bg-[#20d79b] text-white semi-bold'
                                )}
                            onClick={()=>setIsActiveLink(index)}
                        >
                            <item.icon className={(!isExpand)?'m-auto':''}/>
                            <span className={ isExpand?'block' : 'hidden'}>{item?.name}</span>
                        </div>
                    )
                })
            }
        </div>
    </motion.div>
  )
}

export default NavigationBar