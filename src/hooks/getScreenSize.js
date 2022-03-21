import { useState, useEffect } from 'react'; 

const getScreenSize = () => {
    const width = window.innerWidth;
    return width;
};

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
}

export default useScreenSize;