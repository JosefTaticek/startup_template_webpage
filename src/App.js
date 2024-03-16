import { BrowserRouter, Routes, Route } from "react-router-dom"
import Features from "./pages/Features";
import Home from "./pages/Home";
import References from "./pages/References";
import Contact from "./pages/Contact";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";

const App = () => {


 return <BrowserRouter> {/*Starts the communication with browser*/}
  <Routes>
    <Route path="/" element={<SharedLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/features" element={<Features/>}></Route>
      <Route path="/references" element={<References/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Route>
  </Routes>
</BrowserRouter>
}


export default App