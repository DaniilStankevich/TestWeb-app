import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <div className="cream-block-wrapper">
    <ContentLoader
      speed={2}
      width={263.2}
      height={446.2}
      viewBox="0 0 263.2 446.2"
      backgroundColor="#f2f2f2"
      foregroundColor="#ecebeb"
    >
      <rect x="120" y="223" rx="0" ry="0" width="1" height="0" />
      <rect x="124" y="119" rx="0" ry="0" width="2" height="2" />
      <rect x="-2" y="4" rx="5" ry="5" width="263" height="310" />
      <rect x="133" y="330" rx="24" ry="24" width="130" height="45" />
      <rect x="2" y="337" rx="0" ry="0" width="91" height="27" />
    </ContentLoader>
  </div>
);

export default Skeleton;
