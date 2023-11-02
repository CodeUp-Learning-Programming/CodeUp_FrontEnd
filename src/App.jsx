import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Monaco from "./components/Monaco/MonacoEditor.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Roadmap from "./components/Roadmap/Roadmap";
import Exercicio from "./components/Exercicio/Exercicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/terminal" element={<Monaco />} />
          <Route path="/exercicio" element={<Exercicio/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
