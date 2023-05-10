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
        <rect x="40" y="54" rx="5" ry="5" width="300" height="195" />
        <rect x="40" y="330" rx="5" ry="5" width="300" height="30" />
        <rect x="40" y="379" rx="5" ry="5" width="300" height="60" />
    </ContentLoader>
);

export default Skeleton;