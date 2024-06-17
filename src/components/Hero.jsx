import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="max-container">
            <h1 className="text-7xl font-bold">Putuk Truno Camp Area</h1>
            <p>
                We want to be on each of your journeys seeking the satisfaction
                of seeing the incorruptible beauty of nature. We can help you on
                an adventure around the world in just one app
            </p>
            <div className="flex gap-10 items-center mt-10">
                <button className="btn_dark_green rounded-2xl">
                    Download App
                </button>
                <button className="font-semibold flex items-center gap-2">
                    <FaYoutube className="text-2xl text-[#30af5b]"/>
                    <Link href="#">How we work?</Link>
                </button>
            </div>
        </section>
    );
};

export default Hero;
