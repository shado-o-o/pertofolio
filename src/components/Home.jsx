
import Metrics from'../assets/01.jpg'
import { useState } from 'react' 
import { Hero } from '../data/data'
import { motion } from "framer-motion"

 const container= (delay)=>({
  hidden: {x:-100, opacity:0},
  visible: {
    x:0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5
    }},
  hiddeny: {x:100, opacity:0},
  visibley: {
      x:0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5
      }}
 })
 
function Home() {
  const [hideen , useHideen] =useState("20")
  const [read , useRead] =useState("Read More...")
  const value = 'max-h-'+hideen
  
  const handdleHidden=()=>{
    if(hideen === "20"){
       useHideen(hideen=>"full")
       useRead(read=>"Hidden...")
    }
    else{
      useHideen(hideen=>"20")
      
      useRead(read=>"Read More...") 
    }
      
  }
  return (
    <div className="w-full h-4/5 text-white sm:text-white flex flex-col lg:flex-row sm:flex-col  items-center justify-evenly mt-20 sm:text-center ">
      <div className='lg:w-1/2 sm:p-10 sm:mt-5 text-center lg:text-start lg:mt-10'>
        <motion.h1
        variants={container(0)} 
        initial="hidden"
        animate="visible"
       
        className='text-6xl mb-10 ml-2'>Shady Fathy
        </motion.h1>
        <motion.h3 
         variants={container(0.5)} 
         initial="hidden"
         animate="visible"
         className='mb-1 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-fuchsia-500  text-transparent bg-clip-text tracking-tight text-4xl' >Full Stack Developer
        </motion.h3>
        <motion.p
         variants={container(1)} 
         initial="hidden"
         animate="visible"
         className={value+' overflow-hidden  w-full pr-10 pl-10 lg:p-0 text-sm font-medium  lg:max-h-full'}>
          {Hero} 
          
        </motion.p>
        <p onClick={handdleHidden}  className='text-blue-400 lg:hidden curser-pointer'>
          {read}</p>
       
      </div>
      <div>
        <motion.img
         variants={container(0.5)}
         initial="hiddeny"
         animate="visibley"
         src={Metrics} alt="Img" className='w-80 h-100 rounded' />
      </div>

    </div>
  )
}

export default Home
