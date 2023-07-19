import Home from "./pages/home/Home.jsx";
import Landing from "./pages/landing/Landing.jsx";
import Create from "./pages/create/Create.jsx";
import Detail from "./pages/detail/Detail.jsx";
import { Routes, Route, useLocation} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/creategame' element={<Create/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
