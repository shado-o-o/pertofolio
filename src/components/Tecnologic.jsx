import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import {motion} from "framer-motion"
function Tecnologic() {
  return (
    <div className="w-full h-full mt-20  flex  flex-col ">
      <div className="text-center" >
        <motion.h1
         whileInView={{y:0,opacity:1}}
         initial={{y:-50,opacity:0}}
         transition={{duration:0.5}} 
        className="text-3xl font-bold text-center text-white">Technology
        </motion.h1>
      </div>
      <motion.div
       whileInView={{x:0,opacity:1}}
       initial={{x:-100,opacity:0}}
       transition={{duration:0.5}}
      
      className="w-full flex justify-center mt-5 gap-5">
        <FaReact className="text-4xl  lg:text-5xl text-blue-500"/>
        <SiExpress className="text-4xl lg:text-5xl text-white   "/>
        <SiMongodb className="text-4xl lg:text-5xl text-green-500"/>
        <SiNextdotjs className="text-4xl lg:text-5xl text-white"/>
        <RiTailwindCssFill className="text-4xl lg:text-5xl text-blue-700"/>
        <FaNodeJs className="text-4xl lg:text-5xl text-green-500"/>
      </motion.div>
    </div>
  )
}

export default Tecnologic
