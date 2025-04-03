"use client";

import Image from "next/image";
import darkTheme from "@/public/icons/darkTheme.svg";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme,setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
        document.body.setAttribute("data-theme", storedTheme);
      }, []);


    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return ( 
        <button onClick={toggleTheme}>
            <Image src={darkTheme} alt="theme toggle button" width={25} height={25}/>
        </button>
     );
}
 
export default ThemeToggle;