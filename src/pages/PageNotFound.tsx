import { useEffect } from 'react';

import NotFound from '../components/NotFoundBlock';

const PageNotFound = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <NotFound />
};

export default PageNotFound;