export default function FeatureCard({title}){ 
  return(
    <div className="bg-white text-black p-6 rounded-xl shadow-lg">
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}