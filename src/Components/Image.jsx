export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img width={width} height={height} src={src} fit={fit} borderRadius={borderRadius} alt={alt}/>
    </div>
  );
};
