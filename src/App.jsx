import React from "react";
import gsap from "gsap";

import {Terminal, Safari, Resume, Finder, Text, Image, Contact} from "#windows";
import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
        </main>
    );
};

export default App;
