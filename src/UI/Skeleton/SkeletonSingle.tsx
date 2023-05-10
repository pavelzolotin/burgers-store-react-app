import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={1000}
        height={800}
        viewBox="0 0 1000 800"
        backgroundColor="#bdbdbd"
        foregroundColor="#c9c9c9"
    >
        <rect x="107" y="256" rx="5" ry="5" width="312" height="267" />
        <rect x="586" y="216" rx="5" ry="5" width="216" height="30" />
        <rect x="586" y="297" rx="5" ry="5" width="300" height="248" />
    </ContentLoader>
);

export default Skeleton;