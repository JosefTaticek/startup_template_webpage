import { BrowserRouter, Routes, Route } from "react-router-dom"
import Features from "./pages/Features";
import Home from "./pages/Home";
import References from "./pages/References";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

const App = () => {


 return <BrowserRouter> {/*Starts the communication with browser*/}
  <Routes>

    <Route path="/" element={<SharedLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/features" element={<Features/>}></Route>
      <Route path="/references" element={<References/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<Error/>}></Route> {/* * means everything else*/}
    </Route>


  </Routes>
</BrowserRouter>
}


export default App