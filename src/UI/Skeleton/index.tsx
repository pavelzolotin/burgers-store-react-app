import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={375}
        height={470}
        viewBox="0 0 375 470"
        backgroundColor="#bdbdbd"
        foregroundColor="#c9c9c9"
    >
        <rect x="0" y="0" rx="5" ry="5" width="220" height="188" />
        <rect x="0" y="212" rx="5" ry="5" width="360" height="100" />
        <rect x="0" y="333" rx="5" ry="5" width="360" height="30" />
    </ContentLoader>
);

export default Skeleton;