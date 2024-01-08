import "./topbar.css"

export default function Topbar() {
    return(
        <div className="topbar">
            <div className="logo">
                <span className="Logo">EARTH</span>
            </div>
            <div className="menuList">
                <ul className="list">
                    <li>HOME</li>
                </ul>
                <ul className="list">
                    <li>ABOUT</li>
                </ul>
                <ul className="list">
                    <li>SERVICES</li>
                </ul>
                <ul className="list">
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}