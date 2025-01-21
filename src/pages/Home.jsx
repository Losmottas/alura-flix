import React from "react";
import Banner from "../Components/Banner";
import VideoList from "../Components/VideoList";


function Home() {
    return (
        <div className="home">
            <Banner />
            <section>
                <h2>Frontend</h2>
                <VideoList category="Frontend" />
            </section>
            <section>
                <h2>Backend</h2>
                <VideoList category="Backend" />
            </section>
            <section>
                <h2>Innovación</h2>
                <VideoList category="Innovación" />
            </section>
            <section>
                <h2>Gestión</h2>
                <VideoList category="Gestión" />
            </section>
        </div>
    );
}

export default Home;