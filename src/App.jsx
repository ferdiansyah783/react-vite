import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        <Route exact path="/" element={<h1>iindex</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
