import Home from "./pages/home/Home.jsx";
import Landing from "./pages/landing/Landing.jsx";
import Form from "./pages/form/Form.jsx";
import Detail from "./pages/detail/Detail.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/creategame' element={<Form/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
