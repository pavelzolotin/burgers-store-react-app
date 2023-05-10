import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={800}
        height={600}
        viewBox="0 0 800 600"
        backgroundColor="#bdbdbd"
        foregroundColor="#c9c9c9"
    >
        <rect x="290" y="121" rx="5" ry="5" width="300" height="120" />
        <rect x="365" y="276" rx="5" ry="5" width="223" height="50" />
        <rect x="0" y="120" rx="5" ry="5" width="266" height="254" />
    </ContentLoader>
);

export default Skeleton;