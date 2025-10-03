export default function Card({ advantage,id }) {
  return (
    <div id={id} className="advantage-card rounded-xl shadow-2xl border-2 border-green-700 flex flex-col text-justify">
      <img src={advantage.image} className="h-80 object-cover rounded-t-xl opacity-70" />
      <div className="p-6">
        <div className="">{advantage.icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-green-light">
          {advantage.title}
        </h3>
        <p className="text-gray-300 md:my-2">{advantage.description}</p>
      </div>
    </div>
  );
}
