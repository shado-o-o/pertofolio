import { Content } from "../data/data"
import{motion}from "framer-motion"
import Logo from "../assets/03.png"
function Contents() {
  return (
    <div className="w-full text-white h-full mt-20 flex justify-center items-center flex-col">
      <motion.h1 
       whileInView={{y:0,opacity:1}}
       initial={{y:-50,opacity:0}}
       transition={{duration:0.5}}
      className="text-4xl font-bold text-center">Get in Touch</motion.h1>
      <motion.h5
       whileInView={{x:0,opacity:1}}
       initial={{x:-100,opacity:0}}
       transition={{duration:0.5}}
       className="mt-5 flex items-center ">
       <img src={Logo} alt="logo"className="w-10 mr-2" />
        {Content.address}
       <img src={Logo} alt="logo"className="w-10 ml-2" />
      </motion.h5>
      <motion.h5
       whileInView={{x:0,opacity:1}}
       initial={{x:100,opacity:0}}
       transition={{duration:0.5}}
      className="mt-2">{Content.email}</motion.h5>
      <motion.h5
       whileInView={{x:0,opacity:1}}
       initial={{x:-100,opacity:0}}
       transition={{duration:0.5}}
      className="mt-2 mb-5">{Content.phoneNo}</motion.h5>
    </div>
  )
}

export default Contents
