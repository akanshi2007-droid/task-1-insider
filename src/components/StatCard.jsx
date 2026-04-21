export default function StatCard({title,value,subtitle,bgColor,textColor}){
  return(
    <div className={`${bgColor} ${textColor} p-6 rounded-2xl shadow-lg w-full min-h-[140px]`}>
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-xl font-bold mt-2">{value}</h2>
      <p className="text-xs mt-2 opacity-70">{subtitle}</p>
    </div>
  );
}