import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={400}
        height={600}
        viewBox="0 0 400 600"
        backgroundColor="#bdbdbd"
        foregroundColor="#c9c9c9"
    >
        <rect x="5" y="36" rx="5" ry="5" width="350" height="291" />
        <rect x="5" y="346" rx="5" ry="5" width="350" height="42" />
    </ContentLoader>
);

export default Skeleton;