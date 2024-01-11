import "./topbar.css"
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="logo">
                <span className="Logo">EARTH</span>
            </div>
            <div className="menuList">
                <ul className="list">
                    <li>
                        <Link className="link" exact to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/aboutCompo">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/services">
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
        </div>
    )
}