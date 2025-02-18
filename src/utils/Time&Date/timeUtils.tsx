import { useState, useEffect } from "react";

export const UseCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString("en-US", { hour12: false });
            setCurrentTime(formattedTime);
        };
        updateTime(); 
        const interval = setInterval(updateTime, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return currentTime;
};
