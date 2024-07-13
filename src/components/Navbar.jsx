import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Logo from "../assets/03.png"
function Navbar() {
    let style=" h-5 w-5 hover:scale-125 duration-500 ease-in-out cursor-pointer"
    const clickHandle=()=>{
      window.open('https://github.com/shado-o-o',"_blank")
    }
    const clickHandle1=()=>{
      window.open('https://youtube.com/@shady_fthy?si=ro7tS-cfyj-tQaSi',"_blank")
    }
    const clickHandle2=()=>{
      window.open('https://www.instagram.com/shady_fathy_el_sayed?igsh=a3NvbWh0dnowc2pr',"_blank")
    }
    const clickHandle3=()=>{
      window.open('https://www.facebook.com/profile.php?id=100021059707427&mibextid=JRoKGi',"_blank")
    } 
    let style2="fixed butoom-0 top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    let style1="fixed inset-0 -z-10 h-full w-full  py-1 px-1 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    let style3="fixed inset-0 -z-10 h-full w-full bg-cover bg-no-repeat bg-origin-content bg-center bg-[url('assets/04.jpg')]"
    
   const [ground, setGround]=useState(style2);
  return (

    <>
       <div className={ground}></div>
    <div className=" fixed w-full h-10 bg-transparent backdrop-blur text-cyan-50 flex  items-center justify-around top-0 ">
      <div>
        <h1 className="  w-full text-xl flex  items-center   bg-gradient-to-r from-violet-500 via-fuchsia-400 to-fuchsia-500  text-transparent bg-clip-text tracking-tight hover:scale-105 duration-500 ease-in-out" >
          <img src={Logo} className="w-10 mr-2" alt="" /> ShadoW
         
          </h1>
      </div>
      <div className=" flex items-center justfiy-center gap-4 ">
        <FaYoutube  onClick={clickHandle1} className={"text-red-400"+style}/>
        <FaGithub onClick={clickHandle} className={style}/>
        <FaInstagram onClick={clickHandle2} className={"text-pink-400"+style}/>
        <FaFacebookSquare onClick={clickHandle3} className={"text-blue-400"+style} />
        
      
        <div>
            <select name="option" id="option" onChange={(e)=>{setGround(ground=> ground=e.target.value)}} className="h-5 text-sm text-black rounded bg-blue-300 cursor-pointer">
              <option value={style1}>Option 1</option>
              <option value={style2}>Option 2</option>
              <option value={style3}>Option 3</option>
            </select>
        </div>
      
      </div>
    </div></>
  )
}

export default Navbar
