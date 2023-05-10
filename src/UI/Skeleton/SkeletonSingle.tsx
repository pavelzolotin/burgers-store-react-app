import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={600}
        height={600}
        viewBox="0 0 600 600"
        backgroundColor="#bdbdbd"
        foregroundColor="#c9c9c9"
    >
        <rect x="0" y="55" rx="5" ry="5" width="300" height="300" />
        <rect x="350" y="55" rx="5" ry="5" width="216" height="35" />
        <rect x="351" y="118" rx="5" ry="5" width="249" height="146" />
    </ContentLoader>
);

export default Skeleton;