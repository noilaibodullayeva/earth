import "./about.css";
import Img4 from "../img/Our-Mission-min-1024x762.jpg"

export default function About() {
    return (
        <div className="about">
            <div className="aboutus">
                <span className="about">ABOUT US</span>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam ad earum? Expedita ipsa consectetur sint neque exercitationem, error illum quam, sequi ipsam totam perspiciatis!</p>
            </div>
            <div className="imgAnout">
                <img src={Img4} alt="" className="aboutImg" />
            </div>
        </div>
    )
}