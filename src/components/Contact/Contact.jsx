import Footer from "../../pages/Footer/Footer";
import Touch from "../../pages/touch/Touch";
import "./contact.css";
import Mission from "./Mission";

export default function About() {
    return (
        <>
         <div className="aboutCompo">
           <span className="who">CONTACT US</span>
        </div>
        <Mission/>
        <Touch/>
        <Footer/>
        </>
       
    )
}