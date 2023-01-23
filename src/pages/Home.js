import React from "react";
import SideBar from "./SideBar";

function Home() {
    return (
        <div className="column">
            <SideBar />
            <div>
                <a className="Home">
                    Home
                </a>
            </div>
        </div>
    )
}

export default Home;