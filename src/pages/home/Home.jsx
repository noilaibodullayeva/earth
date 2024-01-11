import "./home.css"
import Design from "../../pages/design/Design";
import About from "../../pages/about/About";
import Touch from "../../pages/touch/Touch";
import Footer from "../../pages/Footer/Footer";

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="wordss">
                    <span className="earth">EARTH</span>
                    <span className="endless">ENDLESS POTENTIAL</span>
                    <button className="exploree">EXPLORE</button>
                </div>
            </div>
            <Design />
            <About />
            <Touch />
            <Footer />
        </>

    )
}