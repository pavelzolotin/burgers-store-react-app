import { useState, useEffect } from 'react';

const useCheckMobileScreen = () => {
    const [isMobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|iPhone/i
            )
        );

        setMobile(mobile);
    }, []);

    return {isMobile};
};

export default useCheckMobileScreen;