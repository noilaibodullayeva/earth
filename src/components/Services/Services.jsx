import Footer from "../../pages/Footer/Footer";
import Touch from "../../pages/touch/Touch";
import "./services.css";
import Web from "./Web";

export default function Services() {
    return (
        <>
         <div className="aboutCompo">
           <span className="who">Services</span>
        </div>
        <Web/>
        <Touch/>
        <Footer/>
        </>
       
    )
}