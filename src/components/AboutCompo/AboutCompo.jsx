import Footer from "../../pages/Footer/Footer";
import Touch from "../../pages/touch/Touch";
import "./AboutCompo.css";
import Mission from "./Mission";

export default function About() {
    return (
        <>
         <div className="aboutCompo">
           <span className="who">WHO ARE WE?</span>
        </div>
        <Mission/>
        <Touch/>
        <Footer/>
        </>
       
    )
}