import {BrowserRouter,Route, Routes} from 'react-router-dom';
function FirstPage() {
  return <h1>First Page</h1>;
}

function SecondPage() {
  return <h1>Second Page</h1>;
}

function ThirdPage() {
  return <h1>Third Page</h1>;
}

function App(){
    return(
        <BrowserRouter>
    <Routes>
        
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/Thirdpage" element={<ThirdPage />} />
      </Routes>

   </BrowserRouter>
    );
}