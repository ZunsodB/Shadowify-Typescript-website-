import { useEffect, useState } from "react";

export const UseCurrentDate = () => { 
    const [currentDate, setDate] = useState<string>("");

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString("en-US");
            setDate(formattedDate);
        };
        updateDate();
        const interval = setInterval(updateDate, 60000);
        return () => clearInterval(interval);
    }, []);

    return currentDate;
};
