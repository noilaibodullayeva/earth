import "./form.css"

export default function Forms() {
    return(
        <div className="form">
            <div className="form_1">
                <span className="touchh">Get In Touch</span>
                <form  className="formForm">
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
<i class="fa-regular fa-envelope"></i>

</div>
            </div>
        </div>
    )
}