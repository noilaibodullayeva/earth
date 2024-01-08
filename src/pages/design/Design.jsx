import "./design.css"
import Img1 from "../img/Content-Writing-1024x811.jpg";
import Img2 from "../img/Graphic-Design-1024x806.jpg";
import Img3 from "../img/Our-Mission-min-1024x762.jpg";

export default function Design() {
    return (
        <div className="design">
            <div className="design_one">
                <img src={Img1} alt="img" />
                <span className="web">Web Design</span>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
            </div>
            <div className="design_one">
                <img src={Img2} alt="img" />
                <span className="web">Graphic Desigh</span>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
            </div>
            <div className="design_one">
                <img src={Img3} alt="img" />
                <span className="web">Content Creation</span>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
            </div>
        </div>
    )
}