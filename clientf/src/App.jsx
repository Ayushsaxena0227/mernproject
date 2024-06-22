import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import { Service } from "./page/Service";
import { Navbar } from "./components/Navbar";
import { Error } from "./page/Error";
import { Footer } from "./components/footer/Footer";
import { Logout } from "./page/Logout";
import { Adminlayout } from "./components/layouts/Admin-layout";
import { AdminUsers } from "./page/Admin-users";
import { Admincontacts } from "./page/Admin-contacts";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/services" element = {<Service/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/logout" element = {<Logout/>}/>
          <Route path="*" element = {<Error/>}/>
          {/* nested Route for admin  */}
          <Route path="/admin" element= {<Adminlayout/>}>
          <Route path="users" element = {<AdminUsers/>}/>
          <Route path="contact" element = {<Admincontacts/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
