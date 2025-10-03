export default function Section({ id, className,title='', children }) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col items-center py-14 px-6 ${className}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-light mb-8">
          {title}
        </h2>
      {children}
    </section>
  );
}
