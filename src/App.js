import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cookbook from "./pages/Cookbook";
import Meal from "./pages/Meal";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Cookbook />} />
        <Route path="/:id" element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
