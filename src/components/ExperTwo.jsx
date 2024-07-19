import { Expernise } from "../data/data"
import { motion } from "framer-motion"
function ExperTwo() {
  return (
    <div className="w-full h-full flex items-center  sm:justify-around lg:flex-row sm:flex-col">
      <div className= "lg:mb-10 sm:mb-0  lg:w-1/2 lg:h-screen sm:hidden lg:flex flex items-center justify-between flex-col">
         {Expernise.map((date, index)=>{
            return <motion.h1 key={index}
                  whileInView={{x:0,opacity:1}}
                  initial={{x:-100,opacity:0}}
                  transition={{duration:1}}
                
                  >
                  {date.year}
                 </motion.h1>   
         })}
      </div>
      <div className=" sm:w-full   lg:w-1/2 sm:pr-10 sm:pl-10 h-full ">
          <div className="mt-10">
            {Expernise.map((date)=>{
                return  <>
                     <motion.h1
                          whileInView={{x:0,opacity:1}}
                          initial={{x:-100,opacity:0}}
                          transition={{duration:1}}
                          className="lg:hidden sm:block
                             "
                          >
                          {date.year}
                        </motion.h1>


                 <motion.h1 
                  whileInView={{x:0,opacity:1}}
                  initial={{x:100,opacity:0}}
                  transition={{duration:0.5}}
                 className="mt-10 sm:text-base text-md bg-gradient-to-r from-violet-500 via-fuchsia-400 to-fuchsia-500  text-transparent bg-clip-text tracking-tight">{date.role} - {date.company}
                 </motion.h1>
                 <motion.h6
                  whileInView={{x:0,opacity:1}}
                  initial={{x:100,opacity:0}}
                  transition={{duration:0.5}}
                  className="mt-5 pr-10  sm:pr-0 lg:pr-0 text-sm">{date.description}
                  </motion.h6>
                 <motion.div
                  whileInView={{x:0,opacity:1}}
                  initial={{x:100,opacity:0}}
                  transition={{duration:0.5}}
                  className="w-1/2 flex sm:pb-6 gap-2 sm:gap-4 lg:gap-4 mt-2">
                    {date.technologies.map((date)=>{
                        return <h1 className="bg-blue-400 rounded sm:w-30 lg:w-30 w-20 pl-1 pr-1 text-sm sm:text-xl lg:text-xl ">
                            {date}
                        </h1>
                    })}
                 </motion.div>
                </> 
                })}
                
         
            
            </div>
          
      </div>
    </div>
  )
}

export default ExperTwo
