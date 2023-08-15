import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={375}
        height={550}
        viewBox="0 0 375 550"
        backgroundColor="#999999"
        foregroundColor="#c2c2c2"
    >
        <rect x="0" y="35" rx="5" ry="5" width="350" height="350" />
        <rect x="0" y="424" rx="5" ry="5" width="350" height="55" />
    </ContentLoader>
);

export default Skeleton;