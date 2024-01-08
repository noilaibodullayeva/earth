import "./footer.css"

export default function Footer() {
    return(
        <div className="footer">
             <div className="meniList">
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
            <div className="logo">
                <span className="Logo">EARTH</span>
            </div>
            <div className="copyright">
                <span className="all">2022 Earth. All right reserved.</span>
            </div>
        </div>
    )
}