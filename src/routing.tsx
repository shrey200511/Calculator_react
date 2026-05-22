
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";

function FirstPage() {
  return <h1>First Page</h1>;
}

function SecondPage() {
  return <h1>Second Page</h1>;
}

function ThirdPage() {
  return <h1>Third Page</h1>;
}

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div>
        <ul>
      <li><button onClick={() => navigate("/first")}> First </button></li>
      <li><button onClick={() => navigate("/second-page")}> Second </button></li>
      <li><button onClick={() => navigate("/Thirdpage")}> Third </button></li>
      </ul>
    </div>
  );
}


export function RoutesManager() {
  return (
    <BrowserRouter>
      <NavigationButtons />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/Thirdpage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}