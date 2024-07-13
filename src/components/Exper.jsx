import ExperTwo from "./ExperTwo"
import { motion } from "framer-motion"
function Exper() {
  return (
    <div className="w-full h-full mt-20 flex flex-col justify-center ">
      <div>
        <motion.h1
         whileInView={{y:0,opacity:1}}
         initial={{y:-50,opacity:0}}
         transition={{duration:0.5}}
         className="text-3xl font-bold text-center text-white">Experince</motion.h1>
      </div>
      <div className="w-full h-full text-white mt-5">
         <ExperTwo/>
      </div>
    </div>
  )
}

export default Exper
