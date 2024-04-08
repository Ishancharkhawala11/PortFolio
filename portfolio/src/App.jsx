import "./App.css";
import NaviBar from "./componant/navbar/NaviBar";
import Project from "./pages/Project/Project";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <NaviBar></NaviBar>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/projects" element={<Project></Project>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
