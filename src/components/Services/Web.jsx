import "./web.css"
import Img11 from "./Content-Writing-1024x811.jpg";
import Img22 from "./Graphic-Design-1024x806.jpg";
import Img33 from "./Our-Mission-min-1024x762.jpg";

export default function Web() {
    return (
        <div className="web">
            <div className="web_one">
                <div className="webImg">
                    <img src={Img11} alt="img" />
                </div>

                <div className="webText">
                    <span className="webb">Web Design</span>
                    <p className="loremWeb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
                    <p className="loremWeb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
                     <button className="explore">GET IN TOUCH</button>
                </div>

            </div>
            <div className="web_one">
                <div className="webText">
                    <span className="webb">Graphic Desigh</span>
                    <p className="loremWeb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
                    <p className="loremWeb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
                     <button className="explore">GET IN TOUCH</button>
                </div>
                <div className="webImg">
                    <img src={Img22} alt="img" />
                </div>

            </div>
            <div className="web_one">
                <div className="webImg">
                    <img src={Img33} alt="img" />
                </div>

                <div className="webText">
                    <span className="webb">Content Creation</span>
                    <p className="loremWeb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
                    <p className="loremWeb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur quam at esse quis dolores possimus. Nam soluta rem reprehenderit?</p>
                     <button className="explore">GET IN TOUCH</button>
                </div>

            </div>

        </div>
    )
}