import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={375}
        height={600}
        viewBox="0 0 375 600"
        backgroundColor="#bdbdbd"
        foregroundColor="#c9c9c9"
    >
        <rect x="0" y="5" rx="5" ry="5" width="350" height="279" />
        <rect x="0" y="330" rx="5" ry="5" width="350" height="68" />
        <rect x="0" y="414" rx="5" ry="5" width="350" height="26" />
    </ContentLoader>
);

export default Skeleton;