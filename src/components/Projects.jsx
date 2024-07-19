import { Project } from "../data/data"
import {motion} from "framer-motion"
function Projects() {
  return (
    <div className="w-full h-full mt-20 flex flex-col justify-center ">
    <div>
      <motion.h1
       whileInView={{y:0,opacity:1}}
       initial={{y:-50,opacity:0}}
       transition={{duration:0.5}}
       className="text-3xl font-bold text-center text-white">Projects</motion.h1>
    </div>
    <div className="w-full h-full text-white lg:mt-5 sm:mt-0 ">
    <div className="w-full h-full lg:pr-0 pr-10 sm:flex-col lg:flex-row flex items-center justify-around">
      <div className= "m-28 hidden lg:flex w-1/2 h-full  items-center  flex-col">
         {Project.map((date)=>{
            return<>
             <motion.img 
            whileInView={{x:0,opacity:1}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1}}
            onClick={()=>{
              window.open(date.link,"_blank")
            }}
            src={date.image} alt="mage" className="w-28 cursor-pointer  rounded mt-5 " 
            />
            <h1   onClick={()=>{
              window.open(date.link,"_blank")
            }}
             className="bg-blue-400 rounded text-sm w-fit cursor-pointer hover:bg-blue-300
               pl-2 pr-2 mt-2">view</h1>
            </>
         })}
      </div>
      <div className=" lg:w-1/2  sm:w-full pl-10 sm:p-10 h-full ">
          <div className="mt-10 pr-10 pl-10 lg:pr-0 lg:pl-0">
            {Project.map((date)=>{
                return  <>
                <div className="w-full lg:hidden flex items-center justify-center">
                  <motion.img 
                 whileInView={{x:0,opacity:1}}
                 initial={{x:-100,opacity:0}}
                 transition={{duration:1}}
                 onClick={()=>{
                  window.open(date.link,"_blank")
                 }}
                 src={date.image} alt="mage"
                 className="w-28  rounded mt-10   sm:mt-5" />
                  <h1   onClick={()=>{
                  window.open(date.link,"_blank")
                  }}
                  className="bg-blue-400 rounded hidden  text-sm w-fit cursor-pointer hover:bg-blue-300
                  pl-2 pr-2 mt-2">view</h1>
                </div>
                
                 <motion.h1
                  whileInView={{x:0,opacity:1}}
                  initial={{x:100,opacity:0}}
                  transition={{duration:0.5}} 
                 className="mt-10 sm:text-xl lg:text-xl bg-gradient-to-r from-violet-500 via-fuchsia-400 to-fuchsia-500  text-transparent bg-clip-text tracking-tight">{date.title}</motion.h1>
                 <motion.h6
                  whileInView={{x:0,opacity:1}}
                  initial={{x:100,opacity:0}}
                  transition={{duration:0.5}}
                  className="mt-5 pr-10 lg:pr-0 sm:pr-0 text-sm">{date.description}
                  </motion.h6>
                 <motion.div
                  whileInView={{x:0,opacity:1}}
                  initial={{x:100,opacity:0}}
                  transition={{duration:1}}
                  className="w-1/2 flex gap-2 lg:gap-4 mt-2">
                    {date.technologies.map((date)=>{
                        return <h1 className="bg-blue-400 rounded w-30 lg:text-xl text-sm lg:w-30 pl-1 pr-1 ">
                            {date}
                        </h1>
                    })}
                 </motion.div>
                </> 
                })}
                
         
            
            </div>
          
      </div>
    </div>
    </div>
  </div>
  )
}

export default Projects
