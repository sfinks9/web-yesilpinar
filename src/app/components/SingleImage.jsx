export default function SingleImage({ item }) {
  return (
    <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-92 object-cover"
      />
    </div>
  );
}
