 import AboutImg from "../assets/02.png"
import { AboutMe } from "../data/data"
import { motion } from "framer-motion"

function About() {
  return (
    <div className="h-full w-full mt-20 flex  flex-col">
      <div className=" w-full flex justify-center ">
        <motion.h1
         whileInView={{y:0,opacity:1}}
         initial={{y:-50,opacity:0}}
         transition={{duration:0.5}}
         className="text-3xl font-bold text-white ">About</motion.h1>
      </div>
      <div className="w-full   mt-10 flex items-center justify-around lg:flex-row flex-col sm:flex-col">
          <div className="w-1/2 flex items-center justify-center">
            <motion.img
            whileInView={{x:0,opacity:1}}
            initial={{x:-100,opacity:0}}
            transition={{duration:0.5}}
             src={AboutImg} alt="AboutImg" className="w-80" />
          </div>
          <div className="lg:w-1/2 sm:w-full sm:p-5 pr-10 pl-10 lg:p-0 text-white">
            <motion.h5
             whileInView={{x:0,opacity:1}}
             initial={{x:100,opacity:0}}
             transition={{duration:0.5}}
             className="text-3sm">{AboutMe}
            </motion.h5>
          </div>
      </div>
    </div>
  )
}

export default About
