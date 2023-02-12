import React, {useEffect} from "react";
// import Navbar from "./Navbar";
import Card from "./components/Card"
import Main from "./pages/Main"
import Restaurant from "./pages/Restaurant";
import { Route, Routes, useLocation } from "react-router-dom"
// import Slider from "./components/Slider";


function App() {

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <div>

    <Routes>
      <Route exact path="/" element= {<Main/>} />
      <Route path="/wallet" element= {<Card/>} />
      <Route path="/restaurant/:id" element={<Restaurant/>} />
    </Routes>
    </div>
  );
}

export default App;
