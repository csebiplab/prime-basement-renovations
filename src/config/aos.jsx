"use client"
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

const AosSetup = () => {
    useEffect(()=>{
        import("aos").then((AOS)=>
        AOS.init({
            duration: 1200,
            // once: true,
        }))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AosSetup;