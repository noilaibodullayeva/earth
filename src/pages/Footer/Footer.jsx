import { Link } from "react-router-dom";
import "./footer.css"

export default function Footer() {
    return(
        <div className="footer">
             <div className="meniList">
             <ul className="list">
                    <li>
                        <Link className="link" exact to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/service">
                            SERVICES
                        </Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <span className="Logo">EARTH</span>
            </div>
            <div className="copyright">
                <span className="all">2022 Earth. All right reserved.</span>
            </div>
        </div>
    )
}