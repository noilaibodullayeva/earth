import "./form.css"

export default function Forms() {
    return (
        <div className="form">
            <div className="form_1">
                <span className="touchh">Get In Touch</span>
                <form className="formForm">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Phone Number " />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Massage"></textarea>
                    <button className="now">SEND NOW</button>
                </form>
            </div>
            <div className="form_1">
                <span className="touchh">Talk To Us</span>
                <div className="iconBox">
                    <span className="iconn">
                        <i class="fa-regular fa-envelope"></i>
                        <span className="email">EMAIL <span className="gmail">something@tylor.com</span> </span>
                    </span>
                    <span className="iconn">
                        <i class="fa-solid fa-phone-volume"></i>
                        <span className="email">PHONE NUMBER <span className="gmail">202-555-0188</span> </span>
                    </span>
                    <span className="iconn">
                        <i class="fa-solid fa-location-dot"></i>
                        <span className="email">ADDRESS <span className="gmail">2727 Ocean Road <br /> Malibu, CA, 90264</span> </span>
                    </span>
                    <p className="follow">Follow Us</p>
                    <div className="iconContact">
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}