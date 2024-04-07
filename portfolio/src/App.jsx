import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
