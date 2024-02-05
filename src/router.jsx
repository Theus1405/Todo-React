import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";

export function Router(){

    return(
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/Contato" element={<Contact />} />
        </Routes>

    )


}