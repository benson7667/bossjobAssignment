import ContentLoader from "react-content-loader";

const MyLoader = props => (
  <ContentLoader
    height={200}
    width={395}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="21" y="17" rx="4" ry="4" width="223.24" height="11.12" />
    <rect x="289.41" y="16.92" rx="3" ry="3" width="81.4" height="11.49" />
    <rect x="230.35" y="23.92" rx="0" ry="0" width="0" height="0" />
    <rect x="21" y="36" rx="4" ry="4" width="158.75" height="10.99" />
    <rect x="21" y="53.92" rx="4" ry="4" width="133.94" height="11.98" />
    <circle cx="52.26" cy="108.05" r="27.91" />
    <circle cx="58.35" cy="106.14" r="1" />
    <rect x="92" y="87.92" rx="4" ry="4" width="133.94" height="11.98" />
    <rect x="94" y="107.92" rx="4" ry="4" width="103.13" height="11.26" />
    <rect x="268" y="96.92" rx="4" ry="4" width="103.13" height="11.26" />
  </ContentLoader>
);
