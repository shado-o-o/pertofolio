import About from "./components/About";
import Contents from "./components/Contents";
import Exper from "./components/Exper";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tecnologic from "./components/Tecnologic";

function App() {

 
  return (
    <div className="w-full overflow-hidden h-full  ">
      <Navbar />
      <Home/>
      <About/>
      <Tecnologic/>
      <Exper/>
      <Projects/>
      <Contents/>
   </div>
  );
}

export default App;


