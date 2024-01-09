import "./mission.css";
import Img4 from "./Our-Mission-min-1024x762.jpg"

export default function Mission() {
    return (
        <div className="mission">
            <div className="imgMission">
                <img src={Img4} alt="" className="missiImg" />
            </div>
            <div className="Missionus">
                <span className="missionn">Our Mission</span>
                <p className="loremMission">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam ad earum? Expedita ipsa consectetur sint neque exercitationem, error illum quam, sequi ipsam totam perspiciatis! <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, ad nulla. Incidunt tempora provident error eos perferendis hic vero dolore.</p>
                <p className="loremMission">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam ad earum? Expedita ipsa consectetur sint neque exercitationem, error illum quam, sequi ipsam totam perspiciatis! <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, ad nulla. Incidunt tempora provident error eos perferendis hic vero dolore.</p>
            </div>

        </div>
    )
}