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
        <rect x="0" y="390" rx="5" ry="5" width="360" height="120" />
        <rect x="0" y="540" rx="5" ry="5" width="360" height="50" />
        <rect x="0" y="120" rx="5" ry="5" width="220" height="210" />
    </ContentLoader>
);

export default Skeleton;