export default function ImageContainer({ image, alt }) {
  return (
    <img
      src={image}
      alt={alt}
      className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[420px] lg:h-[500px]"
    />
  );
}